import { cn } from "@/lib/cn";

export default function Card({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-100 bg-white p-6 shadow-sm",
        hover &&
          "transition duration-300 hover:-translate-y-1 hover:border-brand-400 hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}