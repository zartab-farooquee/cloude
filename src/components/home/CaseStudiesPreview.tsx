import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/lib/content";

export function CaseStudiesPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Case Studies"
            title={
              <>
                Proven <span className="brand-gradient-text">ROI</span> for real
                businesses
              </>
            }
            subtitle="See how we've helped companies automate operations and unlock measurable growth."
          />
          <Link
            href="/case-studies"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
          >
            View all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((c, i) => (
            <Reveal
              key={c.slug}
              delay={i * 0.05}
              as="article"
              className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10"
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full bg-brand/10 px-2.5 py-1 font-semibold text-brand">
                  {c.industry}
                </span>
                <span className="text-muted">{c.service}</span>
              </div>
              <h3 className="text-lg font-bold leading-snug">{c.title}</h3>
              <div className="grid grid-cols-3 gap-3">
                {c.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col">
                    <span className="text-xl font-bold brand-gradient-text">
                      {m.value}
                    </span>
                    <span className="text-[11px] leading-tight text-muted">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href={`/case-studies#${c.slug}`}
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
              >
                Read the story
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
