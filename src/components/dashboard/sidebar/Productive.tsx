import React from "react";
import { SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";
import { ProductiveDays } from "./ProductiveDays";

export default function Productive() {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <ProductiveDays />
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
