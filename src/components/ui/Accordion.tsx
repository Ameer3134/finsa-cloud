"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export default function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border bg-white transition duration-300",
        open
          ? "border-brand-400 shadow-md"
          : "border-brand-100 shadow-sm hover:border-brand-400"
      )}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-base font-semibold text-brand-900 md:text-lg">
          {title}
        </span>
        <span
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500 transition duration-300",
            open && "rotate-180 bg-brand-500 text-white"
          )}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-sm leading-relaxed text-slate-600">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}