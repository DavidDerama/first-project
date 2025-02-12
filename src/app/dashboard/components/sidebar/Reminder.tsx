import React from "react";
import { SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";

export default function Reminder() {
  return (
    <SidebarGroup className="w-[95%] mx-auto">
      <SidebarGroupContent className="py-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border">
        <div className="px-3 py-4 flex justify-center items-center">
          <h2 className="text-2xl w-[90%]">
            <span className="font-bold">Good morning,</span>
            <br />
            You have <span className="text-accent_custom">4</span> tasks left
            for today
          </h2>
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
