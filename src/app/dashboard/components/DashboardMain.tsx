import React, { ReactNode } from "react";
import Content from "@/components/Content";

export default function DashboardMain({ children }: { children: ReactNode }) {
  return (
    <main className="flex-grow pt-14">
      <Content className="max-w-screen-md">{children}</Content>
    </main>
  );
}
