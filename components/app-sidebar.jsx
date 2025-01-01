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
      title: "My Journey",
      url: "/journey",
      icon: Briefcase,
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
      name: "TPM for AI at BP",
      url: "/my-work/tpm-ai",
      emoji: "👔",
    },
    {
      name: "Founder of Bar-Trek",
      url: "/my-work/bar-trek",
      emoji: "🍻",
    },
  ],
  navInterests: [
    {
      name: "Poker",
      url: "/interests/poker",
      emoji: "🃏",
    },
    {
      name: "Football",
      url: "/interests/football",
      emoji: "⚽",
    },
    {
      name: "Boxing",
      url: "/interests/boxing",
      emoji: "🥊",
    },
    {
      name: "Podcasts",
      url: "/interests/podcasts",
      emoji: "🎧",
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
        <NavCollapse items={data.navInterests} title="Interests" />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
