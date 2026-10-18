import Image from "next/image";
import { Card } from "@/components/ui";
import type { Person } from "@/data/people";

function getInitials(name: string) {
  return name
    .replace(/^(prof\.?|dr\.?|mr\.?|mrs\.?|ms\.?)\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export default function PersonCard({ person }: { person: Person }) {
  return (
    <Card className="flex flex-col items-center text-center">
      <div className="relative h-24 w-24 overflow-hidden rounded-full bg-linear-to-br from-brand-400 to-brand-500 ring-4 ring-brand-100">
        {person.image ? (
          <Image
            src={`/people/${person.image}`}
            alt={person.name}
            fill
            sizes="96px"
            className="object-cover"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center font-display text-2xl font-bold text-white">
            {getInitials(person.name)}
          </span>
        )}
      </div>

      <h3 className="mt-4 font-display text-base font-semibold text-brand-900">
        {person.name}
      </h3>
      <p className="text-sm font-medium text-brand-900">{person.role}</p>
      <p className="text-xs font-light text-brand-500">{person.tel}</p>
      {person.detail && (
        <p className="mt-2 text-xs text-slate-500">{person.detail}</p>
      )}
    </Card>
  );
}