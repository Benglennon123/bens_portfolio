"use client";

import {
  ArrowUpRight,
  Link,
  MoreHorizontal,
  StarOff,
  Trash2,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { usePathname } from "next/navigation";

export function NavProjects({ projects }) {
  const { isMobile } = useSidebar();
  const pathname = usePathname();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <Collapsible defaultOpen className="group/collapsible">
        <div className="flex">
          <CollapsibleTrigger asChild className="flex-1">
            <SidebarGroupLabel asChild>
              <div className="flex w-full items-center">
                <span>My work</span>
                <Plus className="ml-auto h-4 w-4 group-data-[state=open]/collapsible:hidden" />
                <Minus className="ml-auto h-4 w-4 group-data-[state=closed]/collapsible:hidden" />
              </div>
            </SidebarGroupLabel>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <SidebarMenu>
            {projects.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild isActive={pathname === item.url}>
                  <a href={item.url} title={item.name}>
                    <span>{item.emoji}</span>
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction showOnHover>
                      <MoreHorizontal />
                      <span className="sr-only">More</span>
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-56 rounded-lg"
                    side={isMobile ? "bottom" : "right"}
                    align={isMobile ? "end" : "start"}
                  >
                    <DropdownMenuItem>
                      <Link className="text-muted-foreground" />
                      <span>Copy Link</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ArrowUpRight className="text-muted-foreground" />
                        <span>Open in New Tab</span>
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </CollapsibleContent>
      </Collapsible>
    </SidebarGroup>
  );
}
