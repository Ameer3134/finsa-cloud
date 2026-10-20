import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui";
import Calculator from "@/components/cgpa/Calculator";

export const metadata: Metadata = {
  title: "CGPA Calculator | FINSA Cloud",
  description: "Calculate your semester GPA and cumulative CGPA.",
};

export default function CgpaPage() {
  return (
    <>
      <PageHeader
        title="CGPA" 
        span=" Calculator"
        subtitle="Work out your semester GPA and see how it changes your CGPA."
      />
      <Section>
        <Calculator />
      </Section>
    </>
  );
}