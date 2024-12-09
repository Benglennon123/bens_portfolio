"use client";

import * as React from "react";
import { ChevronDown, Plus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function Logo() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-center gap-2 px-1.5">
          <div className="flex aspect-square size-5 items-center justify-center rounded-md bg-white border border-black">
            <img src="/favicon.ico" alt="Logo" />
          </div>
          <span className="truncate font-semibold">Ben Glennon</span>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
