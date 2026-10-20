export type HandbookSection = {
  id: string;
  title: string;
  points: string[];
};

// Link to the full handbook PDF on Google Drive
export const handbookPdfUrl = "https://drive.google.com/file/d/REPLACE_HANDBOOK";

// PLACEHOLDER content: replace every section with the real handbook text.
export const handbookSections: HandbookSection[] = [
  {
    id: "welcome",
    title: "Welcome to the Department",
    points: [
      "Replace this with the department's welcome message.",
      "Add a short history or mission statement here.",
    ],
  },
  {
    id: "registration",
    title: "Registration & Course Registration",
    points: [
      "Explain when and how students register each session.",
      "List the documents or approvals needed.",
    ],
  },
  {
    id: "attendance",
    title: "Attendance & Examinations",
    points: [
      "State the minimum attendance required to sit exams.",
      "Explain exam rules and what happens with misconduct.",
    ],
  },
  {
    id: "grading",
    title: "Grading System",
    points: [
      "Add the grading table: score ranges and grade points.",
      "Add the class of degree boundaries.",
    ],
  },
  {
    id: "courses",
    title: "Course Structure",
    points: [
      "List core and elective courses for each level.",
      "Note any prerequisites or carry-over rules.",
    ],
  },
  {
    id: "conduct",
    title: "Code of Conduct",
    points: [
      "Describe expected behaviour in class and on campus.",
      "Explain the disciplinary process.",
    ],
  },

  // {
  //   id: "dues",
  //   title: "Association Dues",
  //   points: [
  //     "State the dues amount and how to pay.",
  //     "Explain what the dues are used for.",
  //   ],
  // },

  {
    id: "contacts",
    title: "Important Contacts",
    points: [
      "Add office locations and official contact details.",
    ],
  },
];