import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LinkCard } from "@/components/links/link-card";
import { Plus } from "lucide-react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function LinkPage() {
  return (
    <div className="px-3 xl:px-32 py-4">
      <h1 className="text-2xl font-bold">Snippy Links</h1>
      <form className="mt-4 flex justify-between">
        <div className="relative w-80 flex items-center">
          <FaSearch className="absolute top-0 bottom-0 my-auto left-4" />
          <Input
            type="search"
            placeholder="Search links..."
            className="pl-12 pr-4"
          />
        </div>

        <Link href="/section/links/create">
          <Button>
            <Plus />
            <span className="hidden sm:inline">Create Link</span>
          </Button>
        </Link>
      </form>

      <div className="mt-10 flex flex-col gap-4">
        <LinkCard />
        <LinkCard />
        <LinkCard />
      </div>
    </div>
  );
}
