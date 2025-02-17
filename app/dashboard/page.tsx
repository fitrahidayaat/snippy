"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

export default function DashboardPage() {
	const { data: session, status } = useSession();
	if (status === "loading") {
		return <p>loading...</p>;
	}
  if (!session) return <p>not logged in</p>
	return (
		<>
			<h1>welcome, {session.user?.email}</h1>

			<Button onClick={() => signOut()}>Logout</Button>
		</>
	);
}
