"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui";
import PersonCard from "./PersonCard";
import type { PeopleGroup } from "@/data/people";

export default function PeopleTabs({ groups }: { groups: PeopleGroup[] }) {
  const [activeId, setActiveId] = useState(groups[0].id);
  const active = groups.find((g) => g.id === activeId) ?? groups[0];

  return (
    <div>
      {/* Tabs (scroll sideways on small screens) */}
      <div
        role="tablist"
        aria-label="Select group"
        className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2"
      >
        {groups.map((g) => (
          <button
            key={g.id}
            role="tab"
            aria-selected={g.id === activeId}
            onClick={() => setActiveId(g.id)}
            className={cn(
              "shrink-0 rounded-full px-6 py-2.5 text-sm font-semibold transition duration-200",
              g.id === activeId
                ? "bg-brand-500 text-white shadow-md"
                : "bg-brand-50 text-brand-500 hover:bg-brand-100"
            )}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div key={active.id} role="tabpanel" className="mt-8">
        <p className="animate-fade-up text-slate-600">{active.description}</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {active.people.map((person, i) => (
            <Reveal key={`${person.name}-${i}`} delay={i * 60}>
              <PersonCard person={person} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}