"use client";

import { usePathname } from "next/navigation";
import { BreadcrumbPage } from "@/components/ui/breadcrumb";

export function RouteBreadcrumb() {
  const pathname = usePathname();
  const formattedPath = pathname.slice(1) || "home";

  return (
    <BreadcrumbPage className="line-clamp-1 capitalize">
      {formattedPath}
    </BreadcrumbPage>
  );
}
