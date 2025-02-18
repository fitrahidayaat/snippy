"use client";
import { LogOut } from "lucide-react";
import {
	DropdownMenuItem,
	DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

export default function LogoutDropdownItem() {
	const handleLogout = () => {
		signOut();
	};

	return (
		<>
			<DropdownMenuItem onClick={handleLogout}>
				<LogOut />
				<span>Log out</span>
				<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
			</DropdownMenuItem>
		</>
	);
}
