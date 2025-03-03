"use client";

import { usePathname } from "next/navigation";
import { BreadcrumbPage } from "@/components/ui/breadcrumb";

const breadcrumbMap = {
  "/": "Home",
  "/about": "About",
  "/journey": "Journey",
  "/contact": "Contact",
  "/dashboard": "Dashboard",
  "/my-work": "My Work",
  "/my-work/bar-trek": "Bar-Trek",
  "/my-work/tpm-ai": "Technical Program Manager for AI",
  "/my-work/data-science": "Data Science",
  "/interests": "Interests",
  "/interests/poker": "Poker",
  "/interests/football": "Football",
  "/interests/boxing": "Boxing",
  "/interests/podcasts": "Podcasts",
};

export function RouteBreadcrumb() {
  const pathname = usePathname();
  const breadcrumbText =
    breadcrumbMap[pathname] || pathname.split("/").filter(Boolean).join(" > ");

  return (
    <BreadcrumbPage className="line-clamp-1 capitalize">
      {breadcrumbText}
    </BreadcrumbPage>
  );
}
