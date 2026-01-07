import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority" // Assuming cva is installed
import { cn } from "@/lib/utils"

// Figma Context Usage:
// - Colors mapped to CSS variables in globals.css (derived from --base/input, --base/destructive, etc)
// - Layout/Spacing matched to Figma (h-9, px-3, py-1)
// - Typography matched to Figma (text-sm)

const inputVariants = cva(
    "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                Default: "",
                File: "text-muted-foreground", // File variant specific tweaks if needed
                Password: "",
            },
            state: {
                Default: "",
                Focus: "ring-1 ring-ring", // Simulate focus state visually if forced
                Filled: "",
                Disabled: "cursor-not-allowed opacity-50",
                Error: "border-destructive focus-visible:ring-destructive",
                "Error (Focus)": "border-destructive ring-1 ring-destructive",
            },
        },
        defaultVariants: {
            variant: "Default",
            state: "Default",
        },
    }
)

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, // Omit size to avoid conflict if needed, though usually fine
    VariantProps<typeof inputVariants> {
    placeholderText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, variant, state, placeholderText, ...props }, ref) => {

        // Logic to handle specific Figma variants mapping to HTML attributes
        let inputType = type;
        if (variant === "Password") inputType = "password";
        // For 'File', typically we'd use type="file", but Figma might treat it as a text input with a file icon or similar. 
        // Assuming standard behavior for now:
        if (variant === "File") inputType = "file";

        const isErrored = state === "Error" || state === "Error (Focus)";
        const isDisabled = state === "Disabled" || props.disabled;

        return (
            <input
                type={inputType}
                className={cn(inputVariants({ variant, state, className }))}
                ref={ref}
                disabled={isDisabled}
                aria-invalid={isErrored}
                placeholder={placeholderText || props.placeholder}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }
