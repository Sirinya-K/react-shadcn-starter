import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface DateRangePickerProps {
    className?: string
    date?: DateRange
    onDateChange?: (date: DateRange | undefined) => void
}

export function DateRangePicker({
    className,
    date,
    onDateChange,
}: DateRangePickerProps) {
    const [internalDate, setInternalDate] = React.useState<DateRange | undefined>(
        date ?? {
            from: new Date(2022, 0, 20),
            to: new Date(2022, 5, 9),
        }
    )

    const currentDate = date ?? internalDate

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant="outline"
                        className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !currentDate && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {currentDate?.from ? (
                            currentDate.to ? (
                                <>
                                    {format(currentDate.from, "LLL dd, y")} -{" "}
                                    {format(currentDate.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(currentDate.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="range"
                        defaultMonth={currentDate?.from}
                        selected={currentDate}
                        onSelect={(newDate) => {
                            setInternalDate(newDate)
                            onDateChange?.(newDate)
                        }}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}
