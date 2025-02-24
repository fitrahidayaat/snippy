"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
      }}
    >
      {mounted && theme === "light" ? <MoonIcon /> : <SunIcon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
