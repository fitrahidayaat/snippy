"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupForm() {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);

	const handleSignupGoogle = () => {
		signIn("google", {
			callbackUrl: "/dashboard",
		});
	};

	const handleSignupEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		const res = await fetch("/api/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: formData.get("email")!,
				password: formData.get("password")!,
			}),
		});

		if (res.ok) {
			router.push("/login");
		} else {
			const data = await res.json();
			setError(data.error);
		}
	};

	return (
		<>
			<form action="" className="flex flex-col" onSubmit={handleSignupEmail}>
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
						required
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
						required
					/>
				</div>
				{error && <p className="text-red-500 text-md -mt-2 mb-4">{error}</p>}
				<Button type="submit" className="">
					Sign Up
				</Button>
				<div className="flex justify-center items-center gap-3">
					<span className="bg-gray-600 h-[1px] w-full" />
					<p className="text-center my-3">or</p>
					<span className="bg-gray-600 h-[1px] w-full" />
				</div>
				<Button
					type="button"
					className="bg-background border border-primary text-foreground hover:bg-accent"
					onClick={handleSignupGoogle}
				>
					<FaGoogle />
					Continue with Google
				</Button>
			</form>
		</>
	);
}
