import Link from "next/link";
import { Card, Reveal, Section, SectionHeading } from "@/components/ui";

const items = [
  {
    href: "/materials",
    icon: "📚",
    title: "Study Materials",
    text: "Notes, past questions and resources for every level.",
  },
  {
    href: "/people",
    icon: "👥",
    title: "Administration",
    text: "Executives, SRC, tutors, editorial board and lecturers.",
  },
  {
    href: "/handbook",
    icon: "📘",
    title: "Handbook",
    text: "Department rules, guidelines and course information.",
  },
  {
    href: "/cgpa",
    icon: "🧮",
    title: "CGPA Calculator",
    text: "Work out your GPA and CGPA in seconds.",
  },
  {
    href: "/voice",
    icon: "💬",
    title: "Student Voice",
    text: "Share feedback, complaints and suggestions.",
  },
];

export default function QuickLinks() {
  return (
    <Section>
      <SectionHeading
        title="Where to start"
        subtitle="Jump straight to what you need."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.href} delay={i * 80}>
            <Link href={item.href} className="group block h-full">
              <Card className="h-full">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl transition group-hover:scale-110 group-hover:bg-brand-100">
                  {item.icon}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-brand-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-500 transition group-hover:translate-x-1">
                  Open →
                </span>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}