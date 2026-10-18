import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui";
import PeopleTabs from "@/components/people/PeopleTabs";
import { peopleGroups } from "@/data/people";

export const metadata: Metadata = {
  title: "People | FINSA Cloud",
  description:
    "Meet the executives, SRC members, tutors, editorial board and lecturers.",
};

export default function PeoplePage() {
  return (
    <>
      <PageHeader
        title="Meet the People"
        subtitle="The students and staff who make the department run."
      />
      <Section>
        <PeopleTabs groups={peopleGroups} />
      </Section>
    </>
  );
}