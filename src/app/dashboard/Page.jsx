import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Page() {
  return (
     // Provides context for managing sidebar state (e.g., collapse/expand)
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarTrigger className="-ml-1" />
      {/* Renders the matched nested route content */}
      <Outlet />
    </SidebarProvider>
  );
}
