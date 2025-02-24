"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export default function CopyButton({ link }: { link: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000); // Reset after 1 second.
  };
  return (
    <>
      <Button onClick={handleCopy} size="sm">
        <Copy />
        {copied ? "Copied!" : "Copy"}
      </Button>
    </>
  );
}
