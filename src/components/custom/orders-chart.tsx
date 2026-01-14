import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "Jan", revenue: 2024.11, orders: 1800 },
    { month: "Feb", revenue: 5623.23, orders: 3200 },
    { month: "Mar", revenue: 4800, orders: 2900 },
    { month: "Apr", revenue: 4200, orders: 2700 },
    { month: "May", revenue: 4600, orders: 2850 },
    { month: "Jun", revenue: 4400, orders: 2750 },
]

const chartConfig = {
    revenue: {
        label: "Revenue",
        color: "#ea580c", // Orange from Figma
    },
    orders: {
        label: "Orders",
        color: "#0d9488", // Teal/green from Figma
    },
} satisfies ChartConfig

export function OrdersChart() {
    return (
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 12,
                    right: 12,
                    top: 12,
                }}
            >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                />
                <YAxis hide />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                />
                <Area
                    dataKey="orders"
                    type="natural"
                    fill="var(--color-orders)"
                    fillOpacity={0.4}
                    stroke="var(--color-orders)"
                    stackId="a"
                />
                <Area
                    dataKey="revenue"
                    type="natural"
                    fill="var(--color-revenue)"
                    fillOpacity={0.4}
                    stroke="var(--color-revenue)"
                    stackId="b"
                />
            </AreaChart>
        </ChartContainer>
    )
}
