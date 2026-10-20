import type { Metadata } from "next";
import { Button, PageHeader, Section } from "@/components/ui";
import HandbookView from "@/components/handbook/HandbookView";
import { handbookPdfUrl, handbookSections } from "@/data/handbook";

export const metadata: Metadata = {
  title: "Handbook | FINSA Cloud",
  description: "Department rules, guidelines and course information.",
};

export default function HandbookPage() {
  return (
    <>
      <PageHeader
        title="Department"
        span=" Handbook"
        subtitle="Rules, guidelines and key information every Finance student should know."
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-brand-50 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-display font-semibold text-brand-900">
                Prefer the full document?
              </p>
              <p className="text-sm text-slate-600">
                Open the complete handbook PDF on Google Drive.
              </p>
            </div>
            <Button href={handbookPdfUrl} external variant="primary">
              Open PDF ↗
            </Button>
          </div>

          <HandbookView sections={handbookSections} />
        </div>
      </Section>
    </>
  );
}