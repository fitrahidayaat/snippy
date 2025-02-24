"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LinkCard } from "@/components/links/link-card";
import { Plus } from "lucide-react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";
import { Link as LinkType } from "@prisma/client";

export default function LinkPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const [links, setLinks] = useState<LinkType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLinks = async () => {
      setLoading(true);
      const res = await fetch(`/api/link?search=${search}`);
      if (res.ok) {
        const data = await res.json();
        setLinks(data);
      }
      setLoading(false);
    };
    fetchLinks();
  }, [search]);

  const handleDeleteFromUI = (id: string) => {
    setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
  };

  return (
    <div className="px-3 xl:px-32 py-4">
      <h1 className="text-2xl font-bold">Snippy Links</h1>
      <div className="mt-4 flex justify-between">
        <form className="relative w-80 flex items-center">
          <FaSearch className="absolute top-0 bottom-0 my-auto left-4" />
          <Input
            type="search"
            name="search"
            placeholder="Search links..."
            className="pl-12 pr-4"
          />
        </form>

        <Link href="/section/links/create">
          <Button variant="secondary">
            <Plus />
            <span className="hidden sm:inline">Create Link</span>
          </Button>
        </Link>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        {loading
          ? Array(5)
              .fill(0)
              .map((_, index) => <SkeletonCard key={index} />)
          : links.map((link) => (
              <LinkCard
                key={link.id}
                link={link}
                onDelete={handleDeleteFromUI}
              />
            ))}
      </div>
    </div>
  );
}

// ✅ Skeleton Component
function SkeletonCard() {
  return (
    <div className="p-4 border rounded-lg animate-pulse">
      <Skeleton className="h-6 w-1/3 mb-2" />
      <Skeleton className="h-4 w-2/3 mb-1" />
      <Skeleton className="h-4 w-5/6" />
      <div className="flex gap-2 mt-4">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-16" />
      </div>
    </div>
  );
}
