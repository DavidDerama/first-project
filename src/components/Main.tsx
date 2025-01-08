import React, { ReactNode } from "react";
import Content from "./Content";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className="flex-grow">
      <Content>{children}</Content>
    </main>
  );
}
