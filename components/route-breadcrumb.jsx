"use client";

import { usePathname } from "next/navigation";
import { BreadcrumbPage } from "@/components/ui/breadcrumb";

export function RouteBreadcrumb() {
  const pathname = usePathname();
  // Split path into segments and remove empty strings
  const segments = pathname.split("/").filter(Boolean);
  const formattedPath = segments.length ? segments.join("   >    ") : "home";

  return (
    <BreadcrumbPage className="line-clamp-1 capitalize">
      {formattedPath}
    </BreadcrumbPage>
  );
}
