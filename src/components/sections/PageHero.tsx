import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  breadcrumb?: { name: string; href: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pb-16 pt-14 sm:pb-20 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
      </div>
      <Container className="flex flex-col items-center gap-5 text-center">
        {breadcrumb ? (
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center justify-center gap-1 text-xs text-muted">
              {breadcrumb.map((b, i) => (
                <li key={b.href} className="flex items-center gap-1">
                  {i > 0 ? <ChevronRight className="h-3 w-3" /> : null}
                  {i === breadcrumb.length - 1 ? (
                    <span className="font-medium text-foreground">{b.name}</span>
                  ) : (
                    <Link href={b.href} className="hover:text-brand">
                      {b.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {eyebrow ? (
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
        ) : null}
        <Reveal delay={0.05}>
          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {subtitle ? (
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              {subtitle}
            </p>
          </Reveal>
        ) : null}
        {children ? <Reveal delay={0.15}>{children}</Reveal> : null}
      </Container>
    </section>
  );
}
