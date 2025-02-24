"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Edit } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useState } from "react";
import { Link } from "@prisma/client";
export default function EditButton({ link } : {link: Link}) {
  const [message, setMessage] = useState();

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const response = await fetch(`/api/link`, {
      method: "PUT",
      body: JSON.stringify({
        id: link.id,
        title: formData.get("title"),
        originalLink: formData.get("destination"),
        shortLink: formData.get("custom"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();

    if (response.ok) {
      window.location.reload();
    } else {
      setMessage(result.error || "An error occurred");
    }
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm">
            <Edit />
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Edit link</DialogTitle>
              <DialogDescription>
                Make changes to your link here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  defaultValue={link.title}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="destination" className="text-right">
                  Destination
                </Label>
                <Input
                  id="destination"
                  name="destination"
                  defaultValue={link.originalLink}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="custom" className="text-right">
                  snippy.com/
                </Label>
                <Input
                  id="custom"
                  name="custom"
                  defaultValue={link.shortLink}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter className="flex items-center gap-3">
              <span className="text-red-500">{message}</span>
                <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
