import { ReactNode } from "react";

export default function Content({ children }: { children: ReactNode }) {
  return (
    <section className="max-w-screen-xl mx-auto py-4 px-6">{children}</section>
  );
}
