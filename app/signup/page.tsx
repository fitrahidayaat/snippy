import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Nav from "@/components/ui/nav";
import Link from "next/link";
import SignupForm from "@/components/signup-form";

export default function SignupPage() {
	return (
		<>
			<Nav />
			<div className="h-screen flex justify-center items-center">
				<Card>
					<CardHeader className="min-w-96">
						<CardTitle className="text-center">Create your account</CardTitle>
					</CardHeader>
					<CardContent>
						<SignupForm />
					</CardContent>
					<CardFooter className="flex justify-center">
						<CardDescription className="text-primary">
							Already have an account?{" "}
							<Link className="text-blue-500 hover:underline" href="/login">
								Login
							</Link>
						</CardDescription>
					</CardFooter>
				</Card>
			</div>
		</>
	);
}
