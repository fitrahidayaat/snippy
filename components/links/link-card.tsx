"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import CopyButton from "./copy-button";

import { Link as LinkType } from "@prisma/client";

import EditButton from "./edit-button";
import DeleteButton from "./delete-button";

export function LinkCard({
  link,
  onDelete,
}: {
  link: LinkType;
  onDelete: (id: string) => void;
}) {
  return (
    <Card>
      <CardContent className="flex flex-wrap justify-between pt-8 gap-3">
        <div className="max-w-[400px] lg:max-w-[600px] xl:max-w-[600px] 2xl:max-w-[900px] flex flex-col gap-2">
          <h1 className="text-xl font-bold">{link.title}</h1>
          <a href={link.shortLink} className="text-lg hover:underline">
            snippy.com/{link.shortLink}
          </a>
          <a href={link.originalLink} className="truncate hover:underline">
            {link.originalLink}
          </a>
          <div className="flex items-center gap-2 text-sm mt-5">
            <Calendar size={16} />
            <span>
              {new Date(link.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-end">
          <CopyButton link={link.shortLink} />
          <EditButton link={link} />
          <DeleteButton link={link} onDelete={onDelete} />
        </div>
      </CardContent>
    </Card>
  );
}
