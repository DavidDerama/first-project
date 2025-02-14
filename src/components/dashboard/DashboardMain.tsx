import React, { ReactNode } from "react";
import Content from "../Content";

export default function DashboardMain({ children }: { children: ReactNode }) {
  return (
    <main className="flex-grow pt-14 mb-14">
      <Content className="max-w-screen-lg px-3 py-2">{children}</Content>
    </main>
  );
}
