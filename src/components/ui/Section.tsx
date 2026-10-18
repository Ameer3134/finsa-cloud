import { cn } from "@/lib/cn";
import Container from "./Container";

export default function Section({
  children,
  className,
  tinted,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tinted?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16", tinted && "bg-brand-50", className)}>
      <Container>{children}</Container>
    </section>
  );
}