import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import { Toaster } from "react-hot-toast";
import { Gabarito } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LateControl",
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
        className={`antialiased ${gabarito.className} flex flex-col min-h-screen dark:bg-dark dark:text-light text-dark bg-light scroll-smooth`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <Toaster position="top-center" />
            {children}
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
