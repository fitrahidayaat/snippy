import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import BreadCrumbApp from "@/components/breadcrumb-app";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <>
      <SidebarProvider>
        <AppSidebar user={session?.user} />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <ModeToggle />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <BreadCrumbApp />
            </div>
          </header>
          {children}
          {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
						<div className="grid auto-rows-min gap-4 md:grid-cols-3">
							<div className="aspect-video rounded-xl bg-muted/50" />
							<div className="aspect-video rounded-xl bg-muted/50" />
							<div className="aspect-video rounded-xl bg-muted/50" />
						</div>
						<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
					</div> */}
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
