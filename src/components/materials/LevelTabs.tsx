"use client";

import { useState } from "react";
import { Badge, Button, Card } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { MaterialLevel } from "@/data/materials";

export default function LevelTabs({ levels }: { levels: MaterialLevel[] }) {
  const [activeLevel, setActiveLevel] = useState(levels[0].level);
  const active = levels.find((l) => l.level === activeLevel) ?? levels[0];

  return (
    <div>
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Select level"
        className="flex flex-wrap gap-3"
      >
        {levels.map((l) => (
          <button
            key={l.level}
            role="tab"
            aria-selected={l.level === activeLevel}
            onClick={() => setActiveLevel(l.level)}
            className={cn(
              "rounded-full px-6 py-2.5 text-sm font-semibold transition duration-200",
              l.level === activeLevel
                ? "bg-brand-500 text-white shadow-md"
                : "bg-brand-50 text-brand-500 hover:bg-brand-100"
            )}
          >
            {l.level} Level
          </button>
        ))}
      </div>

      {/* Panel (key makes the animation replay on each switch) */}
      <div key={active.level} role="tabpanel" className="animate-pop mt-8">
        <Card hover={false} className="p-8">
          <Badge>{active.level} Level</Badge>
          <h2 className="mt-3 font-display text-2xl font-bold text-brand-900">
            {active.level} Level Materials
          </h2>
          <p className="mt-2 max-w-xl text-slate-600">{active.description}</p>
          <div className="mt-6">
            <Button href={active.driveUrl} external size="lg">
              Open full folder ↗
            </Button>
          </div>
        </Card>

        {active.courses && active.courses.length > 0 && (
          <div className="mt-10">
            <h3 className="font-display text-xl font-semibold text-brand-900">
              Courses
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {active.courses.map((c) => (
                <a
                  key={c.code}
                  href={c.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <Card className="h-full">
                    <p className="font-display text-lg font-bold text-brand-500">
                      {c.code}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">{c.title}</p>
                    <span className="mt-3 inline-block text-sm font-semibold text-brand-500 transition group-hover:translate-x-1">
                      Open ↗
                    </span>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}