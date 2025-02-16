"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() => {
				setTheme((prev) => {
					return prev === "light" ? "dark" : "light";
				});
			}}
		>
			{theme === "light" ? <MoonIcon /> : <SunIcon />}
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
