import { HTMLProps } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...rest }: HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        "inline-flex items-center rounded border p-1 text-sm leading-4 no-underline border-neutral-700 bg-neutral-800 text-neutral-100 gap-x-2",
        className
      )}
      {...rest}
    />
  );
}
