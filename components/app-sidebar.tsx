"use client";

import * as React from "react";
import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Link,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  ChartBar,
  QrCode,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
// import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user";
// import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  // SidebarHeader,
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
      name: "Acme Inc",
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
      title: "Dashboard",
      url: "/section/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Links",
      url: "/section/links",
      icon: Link,
      // items: [
      // 	{
      // 		title: "All Links",
      // 		url: "/section/links",
      // 	},
      // 	{
      // 		title: "Create Link",
      // 		url: "/section/links/create",
      // 	},
      // ],
    },
    {
      title: "Qr Codes",
      url: "/section/qr-code",
      icon: QrCode,
      // items: [
      // 	{
      // 		title: "All Qr Code",
      // 		url: "/section/qr-code"
      // 	},
      // 	{
      // 		title: "Create Qr Code",
      // 		url: "/section/qr-code/create"
      // 	},
      // ],
    },
    {
      title: "Analytics",
      url: "/section/analytics",
      icon: ChartBar,
    },
    {
      title: "Settings",
      url: "/section/settings",
      icon: Settings2,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader> */}
      <SidebarHeader className="text-center">S</SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
