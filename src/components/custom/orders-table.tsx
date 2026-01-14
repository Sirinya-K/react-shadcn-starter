import { MoreHorizontal, Download, Search, ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const ordersData = [
    {
        id: "#2999",
        status: "Paid",
        customer: { name: "Josh Adams", email: "josh.adams@example.com", avatar: "" },
        product: "Figma UI kit",
        revenue: "$199.00",
    },
    {
        id: "#2998",
        status: "Paid",
        customer: { name: "Emma Watson", email: "emma.watson@example.com", avatar: "" },
        product: "Figma UI kit",
        revenue: "$199.00",
    },
    {
        id: "#2997",
        status: "Paid",
        customer: { name: "Liam Johnson", email: "liam.johnson@example.com", avatar: "" },
        product: "Figma UI kit",
        revenue: "$199.00",
    },
    {
        id: "#2996",
        status: "Paid",
        customer: { name: "Sophie Miller", email: "sophie.miller@example.com", avatar: "" },
        product: "Figma UI kit",
        revenue: "$199.00",
    },
    {
        id: "#2995",
        status: "Paid",
        customer: { name: "Oliver Brown", email: "oliver.brown@example.com", avatar: "" },
        product: "Figma UI kit",
        revenue: "$199.00",
    },
    {
        id: "#2994",
        status: "Refunded",
        customer: { name: "Grace Thompson", email: "grace.thompson@example.com", avatar: "" },
        product: "Figma UI kit",
        revenue: "$199.00",
    },
    {
        id: "#2993",
        status: "Paid",
        customer: { name: "Lucas Martinez", email: "lucas.martinez@example.com", avatar: "" },
        product: "Figma UI kit",
        revenue: "$199.00",
    },
    {
        id: "#2992",
        status: "Paid",
        customer: { name: "Ava Hernandez", email: "ava.hernandez@example.com", avatar: "" },
        product: "Figma UI kit",
        revenue: "$199.00",
    },
]

export function OrdersTable() {
    return (
        <div className="space-y-4">
            {/* Toolbar */}
            <div className="flex items-center justify-between">
                <div className="relative w-[300px]">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search orders" className="pl-9" />
                </div>
                <div className="flex items-center gap-2">
                    <Select defaultValue="all">
                        <SelectTrigger className="w-[160px]">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Status: All orders</SelectItem>
                            <SelectItem value="paid">Paid</SelectItem>
                            <SelectItem value="refunded">Refunded</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                    </Button>
                </div>
            </div>

            {/* Table */}
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]">
                                <Checkbox />
                            </TableHead>
                            <TableHead className="w-[100px]">#</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Product</TableHead>
                            <TableHead className="text-right">Revenue</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {ordersData.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell className="font-medium">{order.id}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={order.status === "Paid" ? "default" : "secondary"}
                                        className={cn(
                                            order.status === "Paid" &&
                                            "bg-green-600 hover:bg-green-600/80"
                                        )}
                                    >
                                        {order.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={order.customer.avatar} />
                                            <AvatarFallback>
                                                {order.customer.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <span className="font-medium">{order.customer.name}</span>
                                            <span className="text-sm text-muted-foreground">
                                                {order.customer.email}
                                            </span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>{order.product}</TableCell>
                                <TableCell className="text-right">{order.revenue}</TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-end gap-2">
                <Button variant="ghost" size="sm" className="gap-1">
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                </Button>
                <Button variant="ghost" size="sm">
                    1
                </Button>
                <Button variant="outline" size="sm">
                    2
                </Button>
                <Button variant="ghost" size="sm">
                    3
                </Button>
                <span className="px-2 text-muted-foreground">...</span>
                <Button variant="ghost" size="sm" className="gap-1">
                    Next
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
