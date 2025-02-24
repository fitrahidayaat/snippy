"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateLinkForm() {
  const [message, setMessage] = useState();
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/link", {
      method: "POST",
      body: JSON.stringify({
        title: formData.get("Title"),
        originalLink: formData.get("destination"),
        shortLink: formData.get("custom"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();

    if (response.ok) {
      router.push("/section/links");
    } else {
      setMessage(result.error || "An error occurred");
    }
  };
  return (
    <>
      <form className="mt-4 flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="destination" className="font-semibold">
            Destination
          </Label>
          <Input id="destination" name="destination" type="text" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="Title" className="font-semibold">
            Title
          </Label>
          <Input id="Title" name="Title" type="text" required />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6">Short Link</h2>
          <div className="flex flex-col gap-2">
            <Label htmlFor="custom" className="font-semibold">
              Custom back-half
            </Label>
            <div className="flex items-center gap-2">
              <span>snippy.com/</span>
              <Input id="custom" name="custom" type="text" required />
            </div>
          </div>
          <div className="flex justify-end mt-8 gap-5 items-center">
            <span className="text-red-500">{message}</span>
            <Button className="w-36" type="submit">
              Create Link
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
