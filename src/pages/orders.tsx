import * as React from "react"
import { Plus, Search, Store, ChevronRight, CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
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

import { format } from "date-fns"
import { DateRange } from "react-day-picker"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Calendar05 from "@/components/blocks/calendar-05"

import { AppSidebar } from "@/components/custom/app-sidebar"
import { StatCard } from "@/components/custom/stat-card"
import { OrdersChart } from "@/components/custom/orders-chart"
import { OrdersTable } from "@/components/custom/orders-table"

export default function OrdersPage() {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(2023, 0, 20),
        to: new Date(2023, 1, 9),
    })
    // suppress unused warning
    void setDate;

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
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    id="date"
                                    variant="outline"
                                    className={cn(
                                        "w-[260px] justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date?.from ? (
                                        date.to ? (
                                            <>
                                                {format(date.from, "LLL dd, y")} -{" "}
                                                {format(date.to, "LLL dd, y")}
                                            </>
                                        ) : (
                                            format(date.from, "LLL dd, y")
                                        )
                                    ) : (
                                        <span>Pick a date</span>
                                    )}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar05 date={date} onDateChange={setDate} />
                                {/* <div>Calendar Disabled for Debugging</div> */}
                            </PopoverContent>
                        </Popover>
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
                    <div className="grid gap-6 sm:grid-cols-2 lg:flex lg:flex-row lg:items-center">
                        <StatCard
                            label="Revenue"
                            value="$40,199.05"
                            percentage="+15.11%"
                            trend="up"
                        />
                        <Separator orientation="vertical" className="hidden h-16 lg:block" />
                        <StatCard
                            label="Total orders"
                            value="1,789"
                            percentage="+25.66%"
                            trend="up"
                        />
                        <Separator orientation="vertical" className="hidden h-16 lg:block" />
                        <StatCard
                            label="New orders"
                            value="341"
                            percentage="+11.23%"
                            trend="up"
                        />
                        <Separator orientation="vertical" className="hidden h-16 lg:block" />
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
