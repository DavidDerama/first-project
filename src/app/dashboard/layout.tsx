import { AppSidebar } from "@/components/app-sidebar";
import Main from "@/components/Main";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <Main>{children}</Main>
    </SidebarProvider>
  );
}
