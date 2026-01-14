import { cn } from "@/lib/utils"

interface StatCardProps {
    label: string
    value: string
    percentage: string
    trend: "up" | "down"
    className?: string
}

export function StatCard({
    label,
    value,
    percentage,
    trend,
    className,
}: StatCardProps) {
    return (
        <div className={cn("flex flex-1 min-w-0 flex-col gap-1", className)}>
            <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{label}</span>
                <span
                    className={cn(
                        "text-sm font-medium",
                        trend === "up" ? "text-green-600" : "text-destructive"
                    )}
                >
                    {percentage}
                </span>
            </div>
            <div className="text-3xl font-semibold tracking-tight">{value}</div>
        </div>
    )
}
