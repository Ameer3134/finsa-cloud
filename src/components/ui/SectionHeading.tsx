import { cn } from "@/lib/cn";

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <div className={cn("mb-10", centered && "text-center")}>
      <h2 className="font-display text-3xl font-bold text-brand-900">
        {title}
      </h2>
      {/* <div
        className={cn(
          "mt-3 h-1 w-16 rounded-full bg-accent-500",
          centered && "mx-auto"
        )}
      /> */}
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-slate-600",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}