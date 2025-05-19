import * as React from "react"
import { GrArticle } from "react-icons/gr";
import { MdAutoAwesome } from "react-icons/md";
import { RiLinksFill } from "react-icons/ri";
import { IoLinkSharp } from "react-icons/io5";
import { MdIntegrationInstructions } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { TbAffiliate } from "react-icons/tb";
import { IoIosHelpCircle } from "react-icons/io";
import { MdTipsAndUpdates } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {
  GalleryVerticalEnd,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "amazon.com",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
 
  ],
  navMain: [
    {
      title: "Articles",
      url: "/",
      icon: GrArticle,
      isActive: true,
      items: [
        {
         title: "Create Article",
          url: 'create-article',
        },
        {
          title: "Generated Articles",
          url: "/generated-articles",
        },
        {
          title: "Keyword projects",
          url: "keyword-projects",
        },
        {
          title: "AI keyword to article",
          url: "ai-keyword-to-article",
        },
        {
         title: "Steal competitor Keyword",
          url: "steal-competitor-keyword",
        },
        {
           title: "Manual Keyword to article",
          url: "manual-keyword-to-article",
        },
        {
           title: "Longtail keyword to article",
          url: "longtail-keyword-to-article",
        },
        {
         title: "Article settings",
          url: "article-settings",
        },
       
      ],
    },
    {
     title: "Auto Blog",
      url: null,
      icon: MdAutoAwesome,
      isActive: true,
      items: [
      ]
    },
    {
     title: "Internal Links",
      url: null,
     icon: RiLinksFill,
      isActive: true,
      items: [
      ]
    },
    {
     title: "Free Backlinks",
      url: null,
      icon: IoLinkSharp,
      isActive: true,
      items: [
      ]
    },
    {
     title: "Integrations",
      url: null,
      icon: MdIntegrationInstructions,
      isActive: true,
      items: [
      ]
    },
    {
     title: "Subscription",
      url: null,
      icon: MdSubscriptions,
      isActive: true,
      items: [
      ]
    },
    {
     title: "Affiliate Programm",
      url: null,
        icon: TbAffiliate,
      isActive: true,
      items: [
      ]
    },
    {
     title: "Help center",
      url: null,
       icon: IoIosHelpCircle,
      isActive: true,
      items: [
      ]
    },
    {
     title: "Updates",
      url: null,
     icon: MdTipsAndUpdates,
      isActive: true,
      items: [
      ]
    },
    
  ],

}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <hr />
      <SidebarFooter>
        <div className="flex gap-2 hover:cursor-pointer items-center">
          <CgProfile className='text-blue-600' />
          
          <p> Profile</p>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
