import { Button, Container } from "@/components/ui";
import Link from "next/dist/client/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-brand-500 to-brand-900 text-white">
      {/* Floating decorative blobs */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 animate-float rounded-full bg-accent-500/20 blur-3xl" />
      <div
        className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 animate-float rounded-full bg-brand-400/30 blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />

      <Container className="relative py-24 md:py-32">
        <p className="animate-fade-up text-sm font-semibold uppercase tracking-widest text-accent-500">
          Finance Students&apos; Association · University of Ilorin
        </p>

        <h1
          className="animate-fade-up mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-6xl"
          style={{ animationDelay: "100ms" }}
        >
          Everything a Finance student needs, in{" "}
          <span className="text-accent-500">one place</span>.
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-xl text-lg text-white/80"
          style={{ animationDelay: "200ms" }}
        >
          Study materials, your executives, lecturers, the department handbook
          and a CGPA calculator, all in FINSA Cloud.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap gap-4"
          style={{ animationDelay: "300ms" }}
        >
          <Button href="/materials" variant="secondary" size="lg">
            Browse Materials
          </Button>
          <Button href="/cgpa" variant="light" size="lg">
            CGPA Calculator
          </Button>
        </div>
        <div>
          <Link href="/" className="absolute right-0 top-0 -translate-y-0.5 opacity-8 pointer-events-none select-none z-0 ">
            <Image
              src="/finsa-logo.jpg"
              alt="Finsa Cloud Image"
              width={600}
              height={600} 
              className="w-125 md:[500px] lg:w-163 h-auto mix-blend-screen"
              priority
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}