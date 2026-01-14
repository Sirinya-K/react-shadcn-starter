import { createRoot } from "react-dom/client"
import { Plus, Search, Store, ChevronRight } from "lucide-react"

import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { AppSidebar } from "@/components/custom/app-sidebar"
import { DateRangePicker } from "@/components/custom/date-range-picker"
import { StatCard } from "@/components/custom/stat-card"
import { OrdersChart } from "@/components/custom/orders-chart"
import { OrdersTable } from "@/components/custom/orders-table"

import "./globals.css"

function OrdersPage() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#" className="flex items-center gap-1">
                                    <Store className="h-4 w-4" />
                                    Store
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <ChevronRight className="h-4 w-4" />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Orders</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>

                <div className="flex flex-1 flex-col gap-6 p-6">
                    {/* Page Header */}
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-semibold tracking-tight">Orders</h1>
                        <div className="flex items-center gap-2">
                            <Button variant="outline">
                                <Search className="mr-2 h-4 w-4" />
                                Search
                            </Button>
                            <Button>
                                <Plus className="mr-2 h-4 w-4" />
                                New
                            </Button>
                        </div>
                    </div>

                    {/* Filters Row */}
                    <div className="flex items-center justify-between">
                        <DateRangePicker />
                        <div className="flex items-center gap-2">
                            <Select defaultValue="all">
                                <SelectTrigger className="w-[140px]">
                                    <SelectValue placeholder="Products" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Products: All</SelectItem>
                                    <SelectItem value="figma">Figma UI kit</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select defaultValue="daily">
                                <SelectTrigger className="w-[100px]">
                                    <SelectValue placeholder="Daily" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="daily">Daily</SelectItem>
                                    <SelectItem value="weekly">Weekly</SelectItem>
                                    <SelectItem value="monthly">Monthly</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="flex items-center gap-6">
                        <StatCard
                            label="Revenue"
                            value="$40,199.05"
                            percentage="+15.11%"
                            trend="up"
                        />
                        <Separator orientation="vertical" className="h-16" />
                        <StatCard
                            label="Total orders"
                            value="1,789"
                            percentage="+25.66%"
                            trend="up"
                        />
                        <Separator orientation="vertical" className="h-16" />
                        <StatCard
                            label="New orders"
                            value="341"
                            percentage="+11.23%"
                            trend="up"
                        />
                        <Separator orientation="vertical" className="h-16" />
                        <StatCard
                            label="Refunds"
                            value="11"
                            percentage="-4.51%"
                            trend="down"
                        />
                    </div>

                    {/* Chart */}
                    <OrdersChart />

                    {/* Orders Table */}
                    <OrdersTable />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

// Mount the app
const container = document.getElementById("root")
if (container) {
    const root = createRoot(container)
    root.render(<OrdersPage />)
} else {
    console.error("Root element not found")
}
