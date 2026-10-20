export const GRADES = [
  { label: "A (5.0)", value: "A", points: 5 },
  { label: "B (4.0)", value: "B", points: 4 },
  { label: "C (3.0)", value: "C", points: 3 },
  { label: "D (2.0)", value: "D", points: 2 },
  { label: "E (1.0)", value: "E", points: 1 },
  { label: "F (0.0)", value: "F", points: 0 },
] as const;

export type CourseRow = {
  id: number;
  name: string;
  units: string;
  grade: string;
};

export function gradePoints(grade: string): number | null {
  const found = GRADES.find((g) => g.value === grade);
  return found ? found.points : null;
}

export function calculateSemester(rows: CourseRow[]) {
  let totalUnits = 0;
  let totalPoints = 0;

  for (const row of rows) {
    const units = parseFloat(row.units);
    const points = gradePoints(row.grade);
    if (!units || units <= 0 || points === null) continue;
    totalUnits += units;
    totalPoints += units * points;
  }

  const gpa = totalUnits > 0 ? totalPoints / totalUnits : null;
  return { totalUnits, totalPoints, gpa };
}

export function calculateCgpa(
  prevCgpa: number,
  prevUnits: number,
  semesterPoints: number,
  semesterUnits: number
) {
  const units = prevUnits + semesterUnits;
  if (units <= 0) return null;
  return (prevCgpa * prevUnits + semesterPoints) / units;
}

export function classify(cgpa: number) {
  if (cgpa >= 4.5) return "First Class";
  if (cgpa >= 3.5) return "Second Class Upper";
  if (cgpa >= 2.4) return "Second Class Lower";
  if (cgpa >= 1.5) return "Third Class";
  if (cgpa >= 1.0) return "Pass";
  return "Below Pass";
}