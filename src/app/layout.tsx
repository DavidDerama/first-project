import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/components/query-provider";
import Navbar from "@/components/Navbar";

import { Gabarito } from "next/font/google";
import Footer from "@/components/Footer";
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
        className={`antialiased ${gabarito.className} flex flex-col min-h-screen`}
      >
        <QueryProvider>
          <Navbar />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
