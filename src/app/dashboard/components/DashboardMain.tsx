import React, { ReactNode } from "react";
import Content from "@/components/Content";

export default function DashboardMain({ children }: { children: ReactNode }) {
  return (
    <main className="flex-grow pt-7">
      <Content>{children}</Content>
    </main>
  );
}
