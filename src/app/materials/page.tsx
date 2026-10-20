import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui";
import LevelTabs from "@/components/materials/LevelTabs";
import { materials } from "@/data/materials";

export const metadata: Metadata = {
  title: "Study Materials | FINSA Cloud",
  description: "Lecture notes, past questions and resources for every level.",
};

export default function MaterialsPage() {
  return (
    <>
      <PageHeader
        title="Study"
        span = " Materials"
        subtitle="select your level to open the resources folder on Google Drive."
      />
      <Section>
        <LevelTabs levels={materials} />
      </Section>
    </>
  );
}