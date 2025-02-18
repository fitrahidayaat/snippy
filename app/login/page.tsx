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
import LoginForm from "@/components/login-form";
// app/users/page.tsx

export default async function LoginPage() {

	return (
		<>
			<Nav />
			<div className="h-screen flex justify-center items-center">
				<Card>
					<CardHeader className="min-w-96">
						<CardTitle className="text-center">Login to your account</CardTitle>
					</CardHeader>
					<CardContent>
						<LoginForm/>
					</CardContent>
					<CardFooter className="flex justify-center">
						<CardDescription className="text-primary">
							Don&apos;t have an account?{" "}
							<Link className="text-blue-500 hover:underline" href="signup">
								Sign up
							</Link>
						</CardDescription>
					</CardFooter>
				</Card>
			</div>
		</>
	);
}
