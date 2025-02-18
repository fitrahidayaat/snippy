import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import NavHome from "@/components/ui/nav-home"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (<>
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  </>
  )
}
