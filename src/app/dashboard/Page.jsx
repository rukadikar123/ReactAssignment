import { AppSidebar } from "@/components/app-sidebar"

import { SidebarProvider,SidebarTrigger, } from "@/components/ui/sidebar"


import dataRaw from "./data.json"
import { DataTable } from "@/components/data-table"
import ArticleTabSwitcher from "./ArticleTabSwitcher";

const data = dataRaw.filter(
  (row) =>
    row.id &&
    row.header &&
    row.type &&
    row.status &&
    row.target &&
    row.limit &&
    row.reviewer
);

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
        <SidebarTrigger className="-ml-1" />
        <div className="py-2 px-6">
          <h1 className="text-3xl text-center font-bold">Articles</h1>
          <ArticleTabSwitcher/>
      </div>
        
    </SidebarProvider>
  )
}
