"use client"

// import * as React from "react" // Removed unused import
import { type DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"

import { Calendar } from "@/components/ui/calendar"

export default function Calendar05({
  className,
  date,
  onDateChange,
}: {
  className?: string
  date?: DateRange
  onDateChange?: (range: DateRange | undefined) => void
}) {
  return (
    <Calendar
      mode="range"
      defaultMonth={date?.from}
      selected={date}
      onSelect={onDateChange}
      numberOfMonths={2}
      className={cn("rounded-lg border shadow-sm", className)}
    />
  )
}
