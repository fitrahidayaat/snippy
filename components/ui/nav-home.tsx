import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import Dropdown from "../dropdown";
export default function NavHome() {
  return <>
    <nav className="flex justify-between items-center p-6 fixed w-screen">
			<Link href="/" className="text-2xl font-bold">Snippy</Link>
      <div className="flex items-center gap-4">
        <ModeToggle />
		  	<Dropdown />
      </div>
		</nav>
  </>
}