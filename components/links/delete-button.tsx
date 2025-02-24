import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { Link as LinkType } from "@prisma/client";
import { useState } from "react";
export default function DeleteButton({
  link,
  onDelete,
}: {
  link: LinkType;
  onDelete: (id: string) => void;
}) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    const res = await fetch(`/api/link`, {
      body: JSON.stringify({
        id: link.id
      }),
      method: "DELETE",
    });

    if (res.ok) {
      onDelete(link.id); // Remove from UI state
    } else {
      alert("Failed to delete link");
    }
    setDeleting(false);
  };
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button size="sm" disabled={deleting}>
            <Trash />
            {deleting ? "Deleting..." : "Delete"}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              link.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
