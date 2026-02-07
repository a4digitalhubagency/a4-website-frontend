import * as React from "react"

import { cn } from "@/lib/utils"

export interface ToastActionElement {
    altText: string
    action: React.ReactNode
}

export interface ToastProps {
    id: string
    title?: React.ReactNode
    description?: React.ReactNode
    open?: boolean
    onOpenChange?: (open: boolean) => void
}

export const Toast = React.forwardRef<
    HTMLDivElement,
    ToastProps & React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-md border border-slate-200 bg-white p-4 text-sm shadow-md",
            className
        )}
        {...props}
    />
))
Toast.displayName = "Toast"

export const Toaster = () => null
