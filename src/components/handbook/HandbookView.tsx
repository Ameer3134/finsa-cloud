"use client";

import { useMemo, useState } from "react";
import { Accordion, Reveal } from "@/components/ui";
import type { HandbookSection } from "@/data/handbook";

export default function HandbookView({
  sections,
}: {
  sections: HandbookSection[];
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sections;
    return sections.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.points.some((p) => p.toLowerCase().includes(q))
    );
  }, [query, sections]);

  return (
    <div>
      <div className="relative">
        <span
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        >
          🔍
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the handbook (e.g. attendance, grading)"
          aria-label="Search the handbook"
          className="w-full rounded-2xl border border-brand-100 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-800 shadow-sm transition placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/30"
        />
      </div>

      <p className="mt-3 text-xs text-slate-500">
        {filtered.length} of {sections.length} sections
      </p>

      <div className="mt-6 space-y-4">
        {filtered.length > 0 ? (
          filtered.map((section, i) => (
            <Reveal key={section.id} delay={i * 50}>
              <Accordion title={section.title}>
                <ul className="list-disc space-y-2 pl-5 marker:text-brand-400">
                  {section.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </Accordion>
            </Reveal>
          ))
        ) : (
          <div className="animate-pop rounded-2xl bg-brand-50 p-10 text-center">
            <p className="font-display text-lg font-semibold text-brand-900">
              No results for &ldquo;{query}&rdquo;
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Try a different word, or open the full PDF handbook.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}