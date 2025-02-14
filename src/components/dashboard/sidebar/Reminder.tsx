import React from "react";
import { SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";
import { Repeat } from "lucide-react";

export default function Reminder() {
  return (
    <SidebarGroup className="w-[95%] mx-auto">
      <SidebarGroupContent className="py-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border">
        <div className="px-3 py-4 flex justify-center items-center">
          <h2 className="text-xl w-[90%]">
            <div className="flex flex-wrap text-light_paragraph dark:text-dark_paragraph">
              You have
              <div className="flex mx-2 gap-2 w-[30px] ">
                <span className="text-light_heading dark:text-dark_heading font-bold flex gap-1 items-center">
                  <Repeat /> 4
                </span>
                habits
              </div>
              left for today.
            </div>
          </h2>
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
