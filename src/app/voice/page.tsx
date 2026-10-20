import type { Metadata } from "next";
import { Card, PageHeader, Section } from "@/components/ui";
import VoiceForm from "@/components/voice/VoiceForm";

export const metadata: Metadata = {
  title: "Student Voice | FINSA Cloud",
  description: "Send feedback, suggestions or complaints to the FINSA executives.",
};

export default function VoicePage() {
  return (
    <>
      <PageHeader
        title="Student Voice"
        subtitle="Have a suggestion, complaint or question? Send it straight to the executives."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <VoiceForm />
          </div>

          <aside className="lg:col-span-1">
            <Card hover={false}>
              <h2 className="font-display text-lg font-bold text-brand-900">
                Good to know
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm text-slate-600 marker:text-brand-400">
                <li>Your message goes directly to the association&apos;s email.</li>
                <li>
                  Tick &ldquo;Send anonymously&rdquo; if you don&apos;t want your
                  name shared. We won&apos;t be able to reply to you.
                </li>
                <li>Please keep it respectful and specific.</li>
              </ul>
            </Card>
          </aside>
        </div>
      </Section>
    </>
  );
}