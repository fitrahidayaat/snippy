"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";
export default function BreadCrumbApp() {
  const pathName = usePathname();
  const paths = pathName.split("/").slice(2);
  const slicingPath = (index: number) => {
    const splitPath = pathName.split("/");
    const path = splitPath.slice(0, index + 3);
    return path.join("/");
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {paths.map((pathName, index) => (
          <React.Fragment key={pathName}>
            {" "}
            {/* Use React.Fragment with a key */}
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href={slicingPath(index)}>
                {pathName}{" "}
                {/* Use the actual path name instead of hardcoding */}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index !== paths.length - 1 && ( // Only render the separator if it's not the last item
              <BreadcrumbSeparator className="hidden md:block" />
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
