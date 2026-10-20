export type Course = {
  code: string;
  title: string;
  driveUrl: string;
};

export type MaterialLevel = {
  level: number;
  description: string;
  driveUrl: string; // main folder for the whole level
  courses?: Course[]; // optional: per-course folders
};

export const materials: MaterialLevel[] = [
  {
    level: 100,
    description: "Lecture notes, PDFs and resources for 100 level courses.",
    driveUrl: "https://drive.google.com/drive/folders/154Nwr_irg3fxNoefg0oz1Ze4FOcHcLLp",
  },
  {
    level: 200,
    description: "Lecture notes, PDFs and resources for 200 level courses.",
    driveUrl: "https://drive.google.com/drive/folders/1DskXNBlNBH6TGlXiNGzFReZZZSnkDp37",
    // courses: [
    //   {
    //     code: "FIN 202",
    //     title: "Course title here",
    //     driveUrl: "https://drive.google.com/drive/folders/REPLACE_FIN202",
    //   },
    // ],
  },
  {
    level: 300,
    description: "Lecture notes, PDFs and resources for 300 level courses.",
    driveUrl: "https://drive.google.com/drive/folders/1u3szPHgjqFZzpyvaizZ1-nSk2bRxKEpp",
  },
  {
    level: 400,
    description: "Lecture notes, PDFs and resources for 400 level courses.",
    driveUrl: "https://drive.google.com/drive/folders/1ZqNVqPKsr5lW6QzajHnUgVy3c-6YvmvP",
  },
];
