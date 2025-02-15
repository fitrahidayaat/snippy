import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import Link from "next/link";
export default function Nav() {
	return (
		<nav className="flex justify-around items-center p-4">
			<h1 className="text-xl font-bold">Snippy</h1>
			<ul className="flex space-x-4 items-center">
				<li>
					<ModeToggle />
				</li>
				<li>
					<Link href="/login" className="bg-primary text-secondary border py-2 px-4 rounded-lg transition-all">
						Login
					</Link>
				</li>
				<li>
					<Link href="/signup" className="py-2 px-4 rounded-lg border border-primary transition-all">
						Sign Up
					</Link>
				</li>
			</ul>
		</nav>
	);
}
