"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function LoginForm() {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const handleLoginGoogle = () => {
		signIn("google", {
			callbackUrl: "/section/dashboard",
		});
	};

	const handleLoginEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		const formData = new FormData(e.currentTarget);

		const signInResponse = await signIn("credentials", {
			email: formData.get("email"),
			password: formData.get("password"),
			redirect: false,
		});

		if (signInResponse?.ok) {
			router.push("/section/dashboard");
		} else {
			setLoading(false);
			setError(signInResponse!.error);
		}
	};

	return (
		<>
			<form action="" className="flex flex-col" onSubmit={handleLoginEmail}>
				<div className="flex flex-col mb-4 gap-2">
					<Label htmlFor="email" className="">
						Email
					</Label>
					<Input
						id="email"
						name="email"
						type="email"
						placeholder="Email"
						className=""
					/>
				</div>
				<div className="flex flex-col gap-2 mb-6">
					<Label htmlFor="password">Password</Label>
					<Input
						id="password"
						name="password"
						type="password"
						placeholder="Password"
						className=""
					/>
				</div>
				{error && <p className="text-red-500 text-md -mt-2 mb-4">{error}</p>}
				{loading ? (
					<Button type="submit" className="" disabled>
						<Loader2 className="animate-spin" />
						Login
					</Button>
				) : (
					<Button type="submit" className="">
						Login
					</Button>
				)}

				<div className="flex justify-center items-center gap-3">
					<span className="bg-gray-600 h-[1px] w-full" />
					<p className="text-center my-3">or</p>
					<span className="bg-gray-600 h-[1px] w-full" />
				</div>
				<Button
					type="button"
					className="bg-background border border-primary text-foreground hover:bg-accent"
					onClick={handleLoginGoogle}
				>
					<FaGoogle />
					Continue with Google
				</Button>
			</form>
		</>
	);
}
