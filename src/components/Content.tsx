import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function Content({
  className,
  children,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={twMerge("max-w-screen-xl mx-auto py-4 px-6", className)}
    >
      {children}
    </section>
  );
}
