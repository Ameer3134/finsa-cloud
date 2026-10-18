import { Button, Container, Reveal } from "@/components/ui";

export default function CallToAction() {
  return (
    <section className="py-16">
      <Container>
        <Reveal>
          <div className="rounded-3xl bg-linear-to-r from-brand-500 to-brand-900 px-8 py-14 text-center text-white">
            <h2 className="font-display text-3xl font-bold">
              Ready to ace this semester?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-white/80">
              Grab your level&apos;s materials and get studying.
            </p>
            <div className="mt-8">
              <Button href="/materials" variant="secondary" size="lg">
                Go to Materials
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}