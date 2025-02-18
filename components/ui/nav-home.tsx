import { ModeToggle } from "@/components/mode-toggle";
import Dropdown from "../dropdown";
export default function NavHome() {
  return <>
    <nav className="px-6 right-0 fixed w-full flex justify-end">
      <div className="flex items-center gap-4">
        <ModeToggle />
		  	<Dropdown />
      </div>
		</nav>
  </>
}