"use client";

import * as React from "react";
import { Home, User, Briefcase, Phone } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { Logo } from "@/components/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavCollapse } from "@/components/nav-collapse";
import { Separator } from "@/components/ui/separator";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,
      isActive: true,
    },
    {
      title: "About Me",
      url: "/about",
      icon: User,
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "Contact",
      url: "/contact",
      icon: Phone,
    },
  ],
  navProjects: [
    {
      name: "Data Science at BP",
      url: "/projects/data-science",
      emoji: "📊",
    },
    {
      name: "TPM for AI at BP",
      url: "/projects/tpm-ai",
      emoji: "👔",
    },
    {
      name: "Bar-Trek",
      url: "/projects/bar-trek",
      emoji: "🍻",
    },
  ],
  navHobbies: [
    {
      name: "Poker",
      url: "/hobbies/poker",
      emoji: "🃏",
    },
    {
      name: "Football",
      url: "/hobbies/football",
      emoji: "⚽",
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <Logo />
        <Separator className="h-px bg-black dark:bg-white" />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavCollapse items={data.navProjects} title="My work" />
        <NavCollapse items={data.navHobbies} title="Hobbies" />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
