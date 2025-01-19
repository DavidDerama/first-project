"use client";
import {
  Home,
  Inbox,
  UserRoundPen,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Image from "next/image";
import { DatePicker } from "./DatePicker";
import useUser from "@/hooks/useUser";
import { NavUser } from "./NavUser";
import Link from "next/link";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Generate a Habit",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Dream Self",
    url: "#",
    icon: UserRoundPen,
  },
  {
    title: "Landing",
    url: "../",
    icon: ChartNoAxesColumnIncreasing,
  },
];

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  calendars: [
    {
      name: "My Calendars",
      items: ["Personal", "Work", "Family"],
    },
    {
      name: "Favorites",
      items: ["Holidays", "Birthdays"],
    },
    {
      name: "Other",
      items: ["Travel", "Reminders", "Deadlines"],
    },
  ],
};

export function AppSidebar() {
  const { data: user, isFetching } = useUser();

  const userInfo = {
    name: user?.display_name ?? "",
    email: user?.email ?? "",
    avatar: user?.img_url ?? "",
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl mt-3 mb-5 p-1">
            <Image alt="logo" height={40} width={42} src="/icon.png" />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span className="text-lg">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <DatePicker />
      </SidebarContent>
      {!isFetching && (
        <SidebarFooter className="flex">
          <NavUser user={userInfo} />
        </SidebarFooter>
      )}
    </Sidebar>
  );
}
