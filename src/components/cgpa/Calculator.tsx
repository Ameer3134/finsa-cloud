"use client";

import { useState } from "react";
import { Badge, Button, Card } from "@/components/ui";
import {
  GRADES,
  calculateCgpa,
  calculateSemester,
  classify,
  type CourseRow,
} from "@/lib/gpa";

const inputStyles =
  "w-full rounded-xl border border-brand-100 bg-white px-3 py-2.5 text-sm text-slate-800 " +
  "placeholder:text-slate-400 transition focus:border-brand-400 focus:outline-none " +
  "focus:ring-2 focus:ring-brand-400/30";

let nextId = 1;
const newRow = (): CourseRow => ({
  id: nextId++,
  name: "",
  units: "3",
  grade: "",
});

export default function Calculator() {
  const [rows, setRows] = useState<CourseRow[]>(() => [
    newRow(),
    newRow(),
    newRow(),
    newRow(),
    newRow(),
  ]);
  const [prevCgpa, setPrevCgpa] = useState("");
  const [prevUnits, setPrevUnits] = useState("");

  const updateRow = (id: number, field: keyof CourseRow, value: string) =>
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, [field]: value } : r)));

  const removeRow = (id: number) =>
    setRows((rs) => (rs.length > 1 ? rs.filter((r) => r.id !== id) : rs));

  const reset = () => {
    setRows([newRow(), newRow(), newRow(), newRow(), newRow()]);
    setPrevCgpa("");
    setPrevUnits("");
  };

  const semester = calculateSemester(rows);

  const prevC = parseFloat(prevCgpa);
  const prevU = parseFloat(prevUnits);
  const hasPrevious =
    !Number.isNaN(prevC) && !Number.isNaN(prevU) && prevU > 0 && prevC >= 0 && prevC <= 5;

  const cgpa =
    hasPrevious && semester.gpa !== null
      ? calculateCgpa(prevC, prevU, semester.totalPoints, semester.totalUnits)
      : null;

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Left: inputs */}
      <div className="space-y-8 lg:col-span-2">
        <Card hover={false}>
          <h2 className="font-display text-xl font-bold text-brand-900">
            This semester&apos;s courses
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Enter the units and grade for each course.
          </p>

          <div className="mt-6 space-y-3">
            {rows.map((row, i) => (
              <div
                key={row.id}
                className="animate-pop grid grid-cols-12 items-center gap-2"
              >
                <input
                  type="text"
                  value={row.name}
                  onChange={(e) => updateRow(row.id, "name", e.target.value)}
                  placeholder={`Course ${i + 1} (optional)`}
                  aria-label={`Course ${i + 1} name`}
                  className={`${inputStyles} col-span-12 sm:col-span-5`}
                />
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={row.units}
                  onChange={(e) => updateRow(row.id, "units", e.target.value)}
                  placeholder="Units"
                  aria-label={`Course ${i + 1} units`}
                  className={`${inputStyles} col-span-4 sm:col-span-2`}
                />
                <select
                  value={row.grade}
                  onChange={(e) => updateRow(row.id, "grade", e.target.value)}
                  aria-label={`Course ${i + 1} grade`}
                  className={`${inputStyles} col-span-6 sm:col-span-4`}
                >
                  <option value="">Grade</option>
                  {GRADES.map((g) => (
                    <option key={g.value} value={g.value}>
                      {g.label}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => removeRow(row.id)}
                  aria-label={`Remove course ${i + 1}`}
                  className="col-span-2 rounded-xl py-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500 sm:col-span-1"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setRows((rs) => [...rs, newRow()])}
            >
              + Add course
            </Button>
            <Button type="button" variant="ghost" size="sm" onClick={reset}>
              Reset all
            </Button>
          </div>
        </Card>

        <Card hover={false}>
          <h2 className="font-display text-xl font-bold text-brand-900">
            Previous record{" "}
            <span className="text-sm font-normal text-slate-500">(optional)</span>
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Fill this in to get your new CGPA after this semester.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              Previous CGPA
              <input
                type="number"
                min={0}
                max={5}
                step="0.01"
                value={prevCgpa}
                onChange={(e) => setPrevCgpa(e.target.value)}
                placeholder="e.g. 4.12"
                className={`${inputStyles} mt-1`}
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Total units passed so far
              <input
                type="number"
                min={0}
                value={prevUnits}
                onChange={(e) => setPrevUnits(e.target.value)}
                placeholder="e.g. 72"
                className={`${inputStyles} mt-1`}
              />
            </label>
          </div>
        </Card>
      </div>

      {/* Right: results */}
      <div className="lg:col-span-1">
        <div className="lg:sticky lg:top-24">
          <div className="rounded-3xl bg-linear-to-br from-brand-500 to-brand-900 p-8 text-white shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-500">
              Semester GPA
            </p>
            <p
              key={`gpa-${semester.gpa?.toFixed(2) ?? "none"}`}
              className="animate-pop mt-2 font-display text-6xl font-extrabold"
            >
              {semester.gpa !== null ? semester.gpa.toFixed(2) : "—"}
            </p>
            <p className="mt-2 text-sm text-white/70">
              {semester.totalUnits} units · {semester.totalPoints} points
            </p>

            <div className="my-6 h-px bg-white/20" />

            <p className="text-sm font-semibold uppercase tracking-widest text-accent-500">
              New CGPA
            </p>
            <p
              key={`cgpa-${cgpa?.toFixed(2) ?? "none"}`}
              className="animate-pop mt-2 font-display text-5xl font-extrabold"
            >
              {cgpa !== null ? cgpa.toFixed(2) : "—"}
            </p>
            {cgpa !== null ? (
              <div className="mt-3">
                <Badge className="bg-accent-500 text-brand-900">
                  {classify(cgpa)}
                </Badge>
              </div>
            ) : (
              <p className="mt-2 text-sm text-white/70">
                Add your previous CGPA and units to see this.
              </p>
            )}
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Based on the 5-point scale. Results are an estimate; always confirm
            with your official result.
          </p>
        </div>
      </div>
    </div>
  );
}