import { ReactNode } from "react";

export default function Content({ children }: { children: ReactNode }) {
  return (
    <section className="max-w-screen-lg mx-auto py-6 px-4">{children}</section>
  );
}
