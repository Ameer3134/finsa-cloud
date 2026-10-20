import Container from "./Container";

export default function PageHeader({
  title,
  span,
  subtitle,
}: {
  title: string;
  span?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-brand-500 to-brand-900 text-white">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 animate-float rounded-full bg-accent-500/20 blur-3xl" />
      <Container className="relative py-14 md:py-20">
        <h1 className="animate-fade-up font-display text-3xl font-extrabold md:text-5xl">
          {title}
           <span className="text-accent-500">
          {span}
        </span>
        </h1>
       

        <div
          // className="animate-fade-up mt-2 h-0.5 w-1/2 md:w-1/2 rounded-full bg-accent-500"
          // style={{ animationDelay: "100ms" }}
        />


        {subtitle && (
          <p
            className="animate-fade-up mt-4 max-w-2xl text-white/80  border-t border-accent-500 w-fit text-sm md:text-lg xl:text-xl" 
            style={{ animationDelay: "200ms" }}
          >
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}