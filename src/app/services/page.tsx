import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { services } from "@/lib/services";
import { pageMetadata, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "AI Automation Services — Chatbots, Voice Agents, CRM & More",
  description:
    "Explore ScriptZen's AI automation services: AI chatbots, voice agents, workflow automation, WhatsApp automation, CRM automation, lead generation, email automation, and custom AI development.",
  path: "/services",
  keywords: [
    "AI Automation Services",
    "AI Chatbot Development",
    "AI Agent Development",
    "Business Process Automation",
    "WhatsApp Automation",
    "CRM Automation",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
        title={
          <>
            AI automation services that{" "}
            <span className="brand-gradient-text">drive growth</span>
          </>
        }
        subtitle="Eight core services to automate your operations end to end — from first conversation to closed deal and beyond."
      >
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-brand hover:text-brand"
            >
              {s.title}
            </a>
          ))}
        </div>
      </PageHero>

      <div className="flex flex-col">
        {services.map((service, idx) => (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-24 py-16 sm:py-24 ${
              idx % 2 === 1 ? "border-y border-border bg-background-soft" : ""
            }`}
          >
            <Container className="flex flex-col gap-12">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                <Reveal className="flex flex-col gap-5">
                  <span className="inline-grid h-14 w-14 place-items-center rounded-2xl brand-gradient-bg text-white shadow-lg shadow-brand/20">
                    <Icon name={service.icon} className="h-7 w-7" />
                  </span>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="text-pretty text-base leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button href="/contact">
                      Book Free Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </Reveal>

                <Reveal delay={0.1} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">
                    Key Benefits
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-lg font-bold">Our Process</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {service.process.map((p, i) => (
                    <Reveal
                      key={p.step}
                      delay={i * 0.05}
                      className="relative flex flex-col gap-2 rounded-2xl border border-border bg-card p-5"
                    >
                      <span className="text-2xl font-bold brand-gradient-text">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h4 className="font-semibold">{p.step}</h4>
                      <p className="text-sm leading-relaxed text-muted">
                        {p.detail}
                      </p>
                    </Reveal>
                  ))}
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-bold">FAQs</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    Common questions about our {service.title.toLowerCase()}{" "}
                    service.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                  >
                    Still have questions? Talk to us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="lg:max-w-none">
                  <div className="mx-0 w-full max-w-none [&>div]:max-w-none">
                    <FAQAccordion items={service.faqs} />
                  </div>
                </div>
              </div>

              <JsonLd
                data={[
                  serviceSchema(service),
                  faqSchema(service.faqs),
                ]}
              />
            </Container>
          </section>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 py-8 text-sm text-muted">
        <Check className="h-4 w-4 text-brand" />
        Not sure which service you need? We&apos;ll help you choose.
      </div>

      <CTABanner
        title="Let's Build Your Automation Roadmap"
        subtitle="Book a free consultation and we'll recommend the exact services that will move the needle for your business."
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
    </>
  );
}
