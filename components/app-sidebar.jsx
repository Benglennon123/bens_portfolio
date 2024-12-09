"use client";

import * as React from "react";
import { Home, User, Briefcase, Phone, Clock } from "lucide-react";

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
    {
      title: "Experience",
      url: "/experience",
      icon: Clock,
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
      url: "/my-work/data-science",
      emoji: "📊",
    },
    {
      name: "TPM of AI at BP",
      url: "/my-work/tpm-ai",
      emoji: "👔",
    },
    {
      name: "Bar-Trek",
      url: "/my-work/bar-trek",
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
    {
      name: "Boxing",
      url: "/hobbies/boxing",
      emoji: "🥊",
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
