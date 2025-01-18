import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/components/query-provider";
import { Toaster } from "react-hot-toast";
import { Gabarito } from "next/font/google";
const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "First Saas Project",
  description: "Made By David De Rama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${gabarito.className} flex flex-col min-h-screen bg-light`}
      >
        <QueryProvider>
          <Toaster position="top-center" />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
