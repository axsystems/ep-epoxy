import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 touch-manipulation",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-soft hover:shadow-medium hover:-translate-y-0.5",
        cta: "bg-accent text-white shadow-accent-glow hover:shadow-glow hover:-translate-y-0.5 hover:brightness-110 font-bold",
        hero: "bg-white/90 backdrop-blur-xl text-foreground border border-white/50 shadow-soft hover:bg-white hover:shadow-medium hover:-translate-y-0.5 font-bold",
        "hero-outline": "bg-white/10 backdrop-blur-xl border border-white/30 text-white hover:bg-white/20 hover:border-white/50",
        outline: "border-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground backdrop-blur-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-accent underline-offset-4 hover:underline",
        dark: "bg-dark text-white hover:bg-dark/90 shadow-dark",
        glass: "bg-white/70 backdrop-blur-xl border border-white/40 text-foreground shadow-soft hover:bg-white/90 hover:shadow-medium hover:-translate-y-0.5",
        "glass-accent": "bg-accent/90 backdrop-blur-xl border border-accent/30 text-white shadow-accent-glow hover:bg-accent hover:shadow-glow hover:-translate-y-0.5",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        default: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
