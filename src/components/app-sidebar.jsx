import * as React from "react";
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
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

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
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Articles",
      url: "#",
      icon: GrArticle,
      isActive: true,
      items: [
        {
          title: "Create Article",
          url: "#",
        },
        {
          title: "Generated Articles",
          url: "#",
        },
        {
          title: "Keyword projects",
          url: "#",
        },
        {
          title: "AI keyword to article",
          url: "#",
        },
        {
          title: "Steal competitor Keyword",
          url: "#",
        },
        {
          title: "Import Keyword from GSC",
          url: "#",
        },
        {
          title: "Manual Keyword to article",
          url: "#",
        },
        {
          title: "Longtail keyword to article",
          url: "#",
        },
        {
          title: "Article settings",
          url: "#",
        },
      ],
    },
  ],
  items: [
    {
      name: "Auto Blog",
      url: "#",
      icon: MdAutoAwesome,
    },
    {
      name: "Internal Links",
      url: "#",
      icon: RiLinksFill,
    },
    {
      name: "Free Backlinks",
      url: "#",
      icon: IoLinkSharp,
    },
    {
      name: "Integrations",
      url: "#",
      icon: MdIntegrationInstructions,
    },
    {
      name: "Subscription",
      url: "#",
      icon: MdSubscriptions,
    },
    {
      name: "Affiliate Programm",
      url: "#",
      icon: TbAffiliate,
    },
    {
      name: "Help center",
      url: "#",
      icon: IoIosHelpCircle,
    },
    {
      name: "Updates",
      url: "#",
      icon: MdTipsAndUpdates,
    },
    
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <h1 className="text-4xl py-2 text-center font-extrabold">abun</h1>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects items={data.items} />
      </SidebarContent>
      <hr />
      <SidebarFooter >
        <div className="flex gap-2 hover:cursor-pointer items-center">
          <CgProfile className='text-blue-600' />
          <p> Profile</p>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
