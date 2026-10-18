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
    driveUrl: "https://drive.google.com/drive/folders/REPLACE_100",
  },
  {
    level: 200,
    description: "Organised by course. Open the full folder or pick a course.",
    driveUrl: "https://drive.google.com/drive/folders/REPLACE_200",
    courses: [
      {
        code: "FIN 202",
        title: "Course title here",
        driveUrl: "https://drive.google.com/drive/folders/REPLACE_FIN202",
      },
      {
        code: "FIN 204",
        title: "Course title here",
        driveUrl: "https://drive.google.com/drive/folders/REPLACE_FIN204",
      },
    ],
  },
  {
    level: 300,
    description: "Lecture notes, PDFs and resources for 300 level courses.",
    driveUrl: "https://drive.google.com/drive/folders/REPLACE_300",
  },
  {
    level: 400,
    description: "Lecture notes, PDFs and resources for 400 level courses.",
    driveUrl: "https://drive.google.com/drive/folders/REPLACE_400",
  },
];