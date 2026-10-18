export type Person = {
  name: string;
  role: string;
  tel?: number
  image?: string; // file name inside public/people, e.g. "john-doe.jpg"
  detail?: string; // optional extra line, e.g. courses taught
};

export type PeopleGroup = {
  id: string;
  label: string;
  description: string;
  people: Person[];
};

export const peopleGroups: PeopleGroup[] = [
  {
    id: "executives",
    label: "Executives",
    description: "The leaders running the association this session.",
    people: [
      { name: "Full Name", role: "President", image: "president.jpg" },
      { name: "Full Name", role: "Vice President", tel: +2349045632996 },
      { name: "Full Name", role: "General Secretary" },
      { name: "Adedokun Jamiu Olasunkanmi", role: "Financial Secretary" },
      { name: "Full Name", role: "Welfare Director" },
    ],
  },
  {
    id: "src",
    label: "SRC",
    description: "Students' Representative Council members from the department.",
    people: [
      { name: "Full Name", role: "SRC Member" },
      { name: "Full Name", role: "SRC Member" },
    ],
  },
  {
    id: "tutors",
    label: "Tutors",
    description: "Students who help others with difficult courses.",
    people: [
      { name: "Full Name", role: "Tutor", detail: "FIN 202, FIN 204" },
      { name: "Full Name", role: "Tutor", detail: "ACC 201" },
    ],
  },
  {
    id: "editorial",
    label: "Editorial Board",
    description: "The team behind the association's publications.",
    people: [
      { name: "Full Name", role: "Editor-in-Chief" },
      { name: "Full Name", role: "Associate Editor" },
    ],
  },
  {
    id: "lecturers",
    label: "Lecturers",
    description: "Academic staff of the Department of Finance.",
    people: [
      { name: "Prof. Full Name", role: "Head of Department" },
      { name: "Dr. Full Name", role: "Senior Lecturer", detail: "FIN 301, FIN 305" },
    ],
  },
];