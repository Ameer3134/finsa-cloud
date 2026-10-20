"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

const CATEGORIES = [
  "Suggestion",
  "Complaint",
  "Academic issue",
  "Welfare",
  "Other",
];

const inputStyles =
  "w-full rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm text-slate-800 " +
  "placeholder:text-slate-400 transition focus:border-brand-400 focus:outline-none " +
  "focus:ring-2 focus:ring-brand-400/30 disabled:bg-brand-50 disabled:text-slate-400";

type Status = "idle" | "sending" | "success" | "error";

export default function VoiceForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/voice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, category, message, anonymous, website }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setCategory("");
      setMessage("");
      setAnonymous(false);
    } catch {
      setError("Network error. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="animate-pop rounded-3xl bg-brand-50 p-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 text-3xl text-white">
          ✓
        </div>
        <h2 className="mt-5 font-display text-2xl font-bold text-brand-900">
          Message sent
        </h2>
        <p className="mt-2 text-slate-600">
          Thank you. Your message has been delivered to the FINSA executives.
        </p>
        <div className="mt-6">
          <Button type="button" variant="outline" onClick={() => setStatus("idle")}>
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot: hidden from real users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
      </div>

      <label className="flex cursor-pointer items-center gap-3 rounded-xl bg-brand-50 px-4 py-3 text-sm font-medium text-brand-900">
        <input
          type="checkbox"
          checked={anonymous}
          onChange={(e) => setAnonymous(e.target.checked)}
          className="h-4 w-4 accent-brand-500"
        />
        Send anonymously (your name and email will not be shared)
      </label>

      {!anonymous && (
        <div className="animate-pop grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            Full name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              disabled={sending}
              className={`${inputStyles} mt-1`}
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@gmail.com"
              disabled={sending}
              className={`${inputStyles} mt-1`}
            />
          </label>
        </div>
      )}

      <label className="block text-sm font-medium text-slate-700">
        Category
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={sending}
          className={`${inputStyles} mt-1`}
        >
          <option value="">Select a category</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm font-medium text-slate-700">
        Your message
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          maxLength={2000}
          placeholder="Tell us what's on your mind..."
          disabled={sending}
          className={`${inputStyles} mt-1 resize-y`}
        />
        <span className="mt-1 block text-right text-xs text-slate-400">
          {message.length}/2000
        </span>
      </label>

      {status === "error" && (
        <p
          role="alert"
          className="animate-pop rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600"
        >
          {error}
        </p>
      )}

      <Button type="submit" size="lg" disabled={sending} className="w-full sm:w-auto">
        {sending ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}