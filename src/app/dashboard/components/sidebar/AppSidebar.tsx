"use client";
import { Home, UserRoundPen, ChartNoAxesColumnIncreasing } from "lucide-react";
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
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Reminder from "./Reminder";

const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Dream Self",
    url: "/dashboard/dream",
    icon: UserRoundPen,
  },
  // {
  //   title: "Generate a Habit",
  //   url: "/dashboard/generate",
  //   icon: Inbox,
  // },
  {
    title: "Landing",
    url: "../",
    icon: ChartNoAxesColumnIncreasing,
  },
];

export function AppSidebar() {
  const { data: user, isFetching } = useUser();

  const userInfo = {
    name: user?.display_name ?? "",
    email: user?.email ?? "",
    avatar: user?.img_url ?? "",
  };

  const location = usePathname();

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
                  <SidebarMenuButton
                    asChild
                    className={twMerge(
                      "py-6",
                      location === item.url && "bg-sidebar-accent"
                    )}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span
                        className={twMerge(
                          "text-lg font-bold text-dark dark:text-light",
                          location === item.url
                            ? "font-semibold"
                            : "font-normal"
                        )}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Reminder />
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
