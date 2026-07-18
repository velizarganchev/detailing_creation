import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold tracking-[-0.01em] transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-accent-foreground hover:bg-[#d59a65] active:bg-[#b97b46]",
        outline:
          "border border-white/25 bg-white/5 text-white hover:border-white/45 hover:bg-white/10",
        ghost: "text-foreground hover:bg-foreground/5",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-13 px-7 text-[0.9375rem]",
        sm: "h-9 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
