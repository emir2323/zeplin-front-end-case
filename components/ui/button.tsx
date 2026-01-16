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
                    "inline-flex items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-medium",
                    {
                        "bg-primary text-white hover:bg-primary-dark": variant === "primary",
                        "border border-stroke bg-transparent hover:bg-gray-100 text-gray-scale": variant === "outline",
                        "hover:bg-gray-100 text-gray-scale": variant === "ghost",
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
