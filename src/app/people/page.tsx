import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui";
import PeopleTabs from "@/components/people/PeopleTabs";
import { peopleGroups } from "@/data/people";

export const metadata: Metadata = {
  title: "The Ascedants Administration| FINSA Cloud",
  description:
    "Meet the executives, SRC members, tutors, editorial board and lecturers.",
};

export default function PeoplePage() {
  return (
    <>
      <PageHeader
        title="The Ascedants" 
        span=" Administration"
        subtitle="led by Face Study."
      />
      <Section>
        <PeopleTabs groups={peopleGroups} />
      </Section>
    </>
  );
}