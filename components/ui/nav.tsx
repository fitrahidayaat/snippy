import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
export default function Nav() {
	return (
		<nav className="flex justify-between items-center p-6 fixed w-screen">
			<h1 className="text-2xl font-bold">Snippy</h1>
			<ul className="flex space-x-4 items-center">
				<li>
					<ModeToggle />
				</li>
				<li>
					<Link href="/login" className="py-2 px-4 rounded-md border border-primary transition-all">
						Login
					</Link>
				</li>
				<li>
					<Link href="/signup" className="bg-primary text-secondary border py-2 px-4 rounded-md transition-all">
						Sign Up
					</Link>
				</li>
			</ul>
		</nav>
	);
}
