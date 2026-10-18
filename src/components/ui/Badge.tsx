import { cn } from "@/lib/cn";

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-500",
        className
      )}
    >
      {children}
    </span>
  );
}