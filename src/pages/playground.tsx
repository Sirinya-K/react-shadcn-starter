import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/custom/app-sidebar"
import { Shader7 } from "@/components/blocks/shader7"
import { Hero78 } from "@/components/blocks/hero78"
import { Gallery24 } from "@/components/blocks/gallery24"

export default function PlaygroundPage() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="relative overflow-hidden">
                {/* Background Shader - Fixed position to stay behind everything */}
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <Shader7 />
                    {/* <div className="bg-black/80 w-full h-full" /> */}
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col w-full">
                    {/* Hero Section - Override background and set height */}
                    <div className="w-full">
                        <Hero78 className="bg-none after:hidden dark" />
                    </div>

                    {/* Gallery Section - Force dark mode for text visibility */}
                    <div className="w-full dark text-foreground">
                        <Gallery24 className="bg-transparent" />
                    </div>
                </div>
                {/* Sidebar Trigger - Ensure it's visible */}
                <div className="absolute top-4 left-4 z-50">
                    <SidebarTrigger className="text-white" />
                </div>

            </SidebarInset>
        </SidebarProvider>
    )
}
