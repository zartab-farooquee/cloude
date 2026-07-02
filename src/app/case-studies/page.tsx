import type { Metadata } from "next";
import { ArrowRight, Quote, TrendingUp, TrendingDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { caseStudies } from "@/lib/content";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies — AI Automation Results & ROI",
  description:
    "Real results from ScriptZen's AI automation projects: before-and-after outcomes, ROI metrics, and client success stories across industries.",
  path: "/case-studies",
  keywords: [
    "AI automation case studies",
    "automation ROI",
    "AI Automation Services",
    "client success stories",
  ],
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Case Studies", href: "/case-studies" },
        ]}
        title={
          <>
            Real businesses.{" "}
            <span className="brand-gradient-text">Real results.</span>
          </>
        }
        subtitle="See how ScriptZen turns manual, time-consuming processes into automated systems that deliver measurable ROI."
      />

      <div className="flex flex-col">
        {caseStudies.map((c, idx) => (
          <section
            key={c.slug}
            id={c.slug}
            className={`scroll-mt-24 py-16 sm:py-24 ${
              idx % 2 === 1 ? "border-y border-border bg-background-soft" : ""
            }`}
          >
            <Container className="flex flex-col gap-10">
              <Reveal className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-brand/10 px-3 py-1 font-semibold text-brand">
                    {c.industry}
                  </span>
                  <span className="rounded-full border border-border px-3 py-1 text-muted">
                    {c.service}
                  </span>
                </div>
                <h2 className="max-w-3xl text-balance text-2xl font-bold tracking-tight sm:text-4xl">
                  {c.title}
                </h2>
                <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted">
                  {c.summary}
                </p>
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-3">
                {c.metrics.map((m, i) => (
                  <Reveal
                    key={m.label}
                    delay={i * 0.05}
                    className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-6 text-center"
                  >
                    <span className="text-4xl font-bold brand-gradient-text">
                      {m.value}
                    </span>
                    <span className="text-sm text-muted">{m.label}</span>
                  </Reveal>
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <Reveal className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7">
                  <h3 className="text-lg font-bold">The Challenge</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {c.challenge}
                  </p>
                  <h3 className="mt-2 text-lg font-bold">Our Solution</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {c.solution}
                  </p>
                </Reveal>

                <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-500">
                      <TrendingDown className="h-4 w-4" /> Before
                    </span>
                    <ul className="flex flex-col gap-2.5 text-sm text-muted">
                      {c.before.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="text-red-400">•</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3 rounded-2xl border border-brand/40 bg-brand/5 p-6">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-500">
                      <TrendingUp className="h-4 w-4" /> After
                    </span>
                    <ul className="flex flex-col gap-2.5 text-sm">
                      {c.after.map((a) => (
                        <li key={a} className="flex gap-2">
                          <span className="text-green-500">•</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>

              {c.quote ? (
                <Reveal className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8">
                  <Quote className="h-8 w-8 text-brand/30" />
                  <p className="text-pretty text-lg font-medium leading-relaxed">
                    &ldquo;{c.quote.text}&rdquo;
                  </p>
                  <span className="text-sm font-semibold text-muted">
                    — {c.quote.author}
                  </span>
                </Reveal>
              ) : null}
            </Container>
          </section>
        ))}
      </div>

      <section className="py-16 text-center">
        <Container className="flex flex-col items-center gap-5">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Want results like these?
          </h2>
          <Button href="/contact" size="lg">
            Book Your Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Container>
      </section>

      <CTABanner />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />
    </>
  );
}
