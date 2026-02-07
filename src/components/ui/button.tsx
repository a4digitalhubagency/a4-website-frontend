import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
    {
        variants: {
            variant: {
                default: "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg",
                secondary: "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md",
                outline: "border-2 border-slate-300 bg-transparent hover:bg-slate-50 hover:border-slate-400",
                hero: "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl",
                "hero-outline": "border-2 border-slate-300 text-slate-900 hover:bg-slate-100 hover:border-slate-400 transition-all",
                nav: "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                ghost: "bg-transparent hover:bg-slate-100 text-slate-700",
            },
            size: {
                default: "h-9 px-4 py-2 text-sm",
                xs: "h-7 px-2 text-xs",
                sm: "h-8 px-3 text-xs",
                lg: "h-11 px-6 text-base",
                xl: "h-12 px-8 py-3 text-base md:h-14 md:px-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => (
        <button
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
        />
    )
)
Button.displayName = "Button"

export { Button, buttonVariants }
