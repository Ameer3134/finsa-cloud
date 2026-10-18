import Container from "./Container";

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-brand-500 to-brand-900 text-white">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 animate-float rounded-full bg-accent-500/20 blur-3xl" />
      <Container className="relative py-14 md:py-20">
        <h1 className="animate-fade-up font-display text-3xl font-extrabold md:text-5xl">
          {title}
        </h1>
        <div
          className="animate-fade-up mt-4 h-1 w-16 rounded-full bg-accent-500"
          style={{ animationDelay: "100ms" }}
        />
        {subtitle && (
          <p
            className="animate-fade-up mt-4 max-w-2xl text-white/80"
            style={{ animationDelay: "200ms" }}
          >
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}