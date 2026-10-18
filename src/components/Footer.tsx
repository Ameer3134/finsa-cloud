import Link from "next/link";

const quickLinks = [
  { href: "/materials", label: "Study Materials" },
  { href: "/people", label: "People" },
  { href: "/handbook", label: "Handbook" },
  { href: "/cgpa", label: "CGPA Calculator" },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-bold text-white">
            FINSA <span className="text-accent-500">Cloud</span>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-brand-100/80">
            The official portal of the Finance Students &apos; Association,
            University of Ilorin.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition hover:text-accent-500"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <p className="mt-3 text-sm text-brand-100/80">
            Department of Finance, Faculty of Management Sciences,
            University of Ilorin.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-brand-100/60">
        © {new Date().getFullYear()} FINSA, University of Ilorin. All rights
        reserved.
      </div>
    </footer>
  );
}