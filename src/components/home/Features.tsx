import { Reveal, Section, SectionHeading } from "@/components/ui";

const features = [
  {
    title: "Organised by level",
    text: "Find materials for 100 to 400 level without digging through chats.",
  },
  {
    title: "Always up to date",
    text: "Resources are kept current by the association's executives.",
  },
  {
    title: "Works on your phone",
    text: "Fast and easy to use on any device, even on slow networks.",
  },
];

export default function Features() {
  return (
    <Section tinted>
      <SectionHeading
        align="center"
        title="Why FINSA Cloud?"
        subtitle="Built by Finance students, for Finance students."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 120}>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 font-display text-xl font-bold text-white">
                {i + 1}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-brand-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{f.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}