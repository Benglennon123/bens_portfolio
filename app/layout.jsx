import "./globals.css";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { AppSidebar } from "@/components/app-sidebar";
import { Share } from "@/components/share";
import { Separator } from "@/components/ui/separator";
import { RouteBreadcrumb } from "@/components/route-breadcrumb";

export const metadata = {
  title: "Ben Glennon",
  description: "My personal portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="h-[100dvh] overflow-hidden">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="flex flex-col h-[100dvh] overflow-hidden">
            <header className="flex h-14 shrink-0 items-center gap-2 sticky top-0 bg-background z-10">
              <div className="flex flex-1 items-center gap-2 px-3">
                <SidebarTrigger />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <RouteBreadcrumb />
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="ml-auto px-3">
                <Share />
              </div>
            </header>
            <div className="flex-1 overflow-y-auto w-full">
              <main>{children}</main>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
