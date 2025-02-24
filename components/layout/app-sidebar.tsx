"use client";
import * as React from "react";
import {
  Link,
  Settings2,
  ChartBar,
  QrCode,
  LayoutDashboard,
  Scissors,
} from "lucide-react";
import { NavMain } from "@/components/layout/nav-main";
import { NavUser } from "@/components/layout/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import { Session } from "next-auth";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Snippy",
      logo: Scissors,
      plan: "Shorten your link",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/section/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Links",
      url: "/section/links",
      icon: Link,
    },
    {
      title: "Qr Codes",
      url: "/section/qr-code",
      icon: QrCode,
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
};


export function AppSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & { user?: Session["user"] }) {
  console.log(user);
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
