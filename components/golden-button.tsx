import type React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GoldenButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function GoldenButton({
  children,
  className,
  ...props
}: GoldenButtonProps) {
  return (
    <Button
      className={cn(
        "bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold px-8 py-6 text-lg tracking-wide rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl border-0",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
