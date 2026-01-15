import {
    Book,
    ChevronRight,
    ChevronsUpDown,
    CreditCard,
    Gift,
    Link2,
    Mail,
    Package,
    Settings,
    ShoppingCart,
    Sparkles,
    Terminal,
    Users,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"

const navItems = [
    {
        title: "Playground",
        icon: Terminal,
        url: "/playground",
    },
    {
        title: "Models",
        icon: Sparkles,
        isOpen: true,
        items: [
            { title: "Products", icon: Package, url: "/products" },
            { title: "Orders", icon: ShoppingCart, url: "/orders" },
            { title: "Subscriptions", icon: CreditCard, url: "#" },
            { title: "Customers", icon: Users, url: "#" },
            { title: "Discounts", icon: Gift, url: "#" },
        ],
    },
    {
        title: "Email",
        icon: Mail,
        url: "#",
    },
    {
        title: "Affiliates",
        icon: Link2,
        url: "#",
    },
    {
        title: "Settings",
        icon: Settings,
        url: "#",
    },
]

import { useLocation } from "react-router-dom"

export function AppSidebar() {
    const location = useLocation()
    const pathname = location.pathname

    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                <Book className="size-4" />
                            </div>
                            <div className="flex flex-col gap-0.5 leading-none">
                                <span className="font-semibold">Documentation</span>
                                <span className="text-xs text-muted-foreground">v1.0.1</span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item) =>
                                item.items ? (
                                    <Collapsible
                                        key={item.title}
                                        asChild
                                        defaultOpen={item.isOpen}
                                        className="group/collapsible"
                                    >
                                        <SidebarMenuItem>
                                            <CollapsibleTrigger asChild>
                                                <SidebarMenuButton tooltip={item.title}>
                                                    {item.icon && <item.icon className="size-4" />}
                                                    <span>{item.title}</span>
                                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                                </SidebarMenuButton>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <SidebarMenuSub>
                                                    {item.items.map((subItem) => (
                                                        <SidebarMenuSubItem key={subItem.title}>
                                                            <SidebarMenuSubButton
                                                                asChild
                                                                isActive={pathname === subItem.url}
                                                            >
                                                                <a href={subItem.url}>
                                                                    <span>{subItem.title}</span>
                                                                </a>
                                                            </SidebarMenuSubButton>
                                                        </SidebarMenuSubItem>
                                                    ))}
                                                </SidebarMenuSub>
                                            </CollapsibleContent>
                                        </SidebarMenuItem>
                                    </Collapsible>
                                ) : (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton tooltip={item.title} asChild isActive={pathname === item.url}>
                                            <a href={item.url}>
                                                {item.icon && <item.icon className="size-4" />}
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            )}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg">
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src="" alt="shadcn" />
                                <AvatarFallback className="rounded-lg">SC</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">shadcn</span>
                                <span className="truncate text-xs text-muted-foreground">
                                    m@example.com
                                </span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
