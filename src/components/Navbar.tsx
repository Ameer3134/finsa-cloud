"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/materials", label: "Materials" },
  { href: "/people", label: "People" },
  { href: "/handbook", label: "Handbook" },
  { href: "/cgpa", label: "CGPA Calculator" },
  { href: "/voice", label: "Student Voice" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-display text-lg font-bold text-brand-900">
          FINSA <span className="text-brand-500">Cloud</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-7 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative text-sm font-medium transition-colors hover:text-brand-500
                    after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-brand-500
                    after:transition-all hover:after:w-full
                    ${active ? "text-brand-500 after:w-full" : "text-slate-700 after:w-0"}`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-xl text-brand-900 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="animate-pop border-t border-brand-100 bg-white px-4 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block py-3 font-medium ${
                  pathname === l.href ? "text-brand-500" : "text-slate-700"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}