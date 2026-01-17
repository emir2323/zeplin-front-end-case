import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    size?: "default" | "sm" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg transition-all outline-none focus:outline-none disabled:pointer-events-none disabled:opacity-50 font-medium",
                    {
                        "bg-brand-primary text-white hover:bg-brand-primary/90 shadow-sm": variant === "primary",
                        "border border-gray-200 bg-transparent hover:bg-gray-50 text-brand-text-light hover:text-brand-primary": variant === "outline",
                        "hover:bg-gray-50 text-brand-text-light hover:text-brand-primary": variant === "ghost",
                        "h-10 px-4 py-2": size === "default",
                        "h-8 px-3 text-sm": size === "sm",
                        "h-10 w-10 p-0 text-center justify-center": size === "icon",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
