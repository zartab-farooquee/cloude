import type { Metadata } from "next";
import { Target, Eye, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import { coreValues, trustReasons } from "@/lib/content";
import { pageMetadata, breadcrumbSchema, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About ScriptZen — Our Story, Mission & Values",
  description:
    "Learn about ScriptZen, an AI automation agency on a mission to help businesses save time and grow with AI agents, chatbots, and workflow automation.",
  path: "/about",
  keywords: ["AI Solutions Company", "AI Automation Agency", "about ScriptZen"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
        title={
          <>
            We help businesses{" "}
            <span className="brand-gradient-text">work smarter</span> with AI
          </>
        }
        subtitle={`Founded in ${siteConfig.founded}, ScriptZen is on a mission to make powerful AI automation accessible to every business — not just the tech giants.`}
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="From repetitive busywork to intelligent automation"
            />
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">
              <p>
                ScriptZen started with a simple observation: talented teams were
                spending countless hours on repetitive, manual tasks that
                machines could handle better. Emails, data entry, lead
                follow-ups, customer questions — all consuming time that could be
                spent on real growth.
              </p>
              <p>
                So we set out to change that. We combined the latest advances in
                artificial intelligence with practical business automation to
                build systems that actually move the needle — reliable, secure,
                and designed around each client&apos;s unique workflows.
              </p>
              <p>
                Today, we&apos;ve helped {siteConfig.stats.clients} businesses
                automate {siteConfig.stats.automations} processes and reclaim
                over {siteConfig.stats.hoursSaved} hours — and we&apos;re just
                getting started.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-2 gap-4 self-start">
            {[
              { label: "Hours saved", value: siteConfig.stats.hoursSaved },
              { label: "Businesses served", value: siteConfig.stats.clients },
              { label: "Automations built", value: siteConfig.stats.automations },
              { label: "Satisfaction", value: siteConfig.stats.satisfaction },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-6"
              >
                <span className="text-3xl font-bold brand-gradient-text">
                  {s.value}
                </span>
                <span className="text-sm text-muted">{s.label}</span>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-border bg-background-soft py-20 sm:py-28">
        <Container className="grid gap-6 md:grid-cols-2">
          <Reveal className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-8">
            <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand">
              <Target className="h-6 w-6" />
            </span>
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="leading-relaxed text-muted">
              To empower every business — regardless of size — to automate the
              repetitive, so their people can focus on the meaningful. We make
              enterprise-grade AI automation practical, affordable, and
              genuinely impactful.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-8">
            <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand">
              <Eye className="h-6 w-6" />
            </span>
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="leading-relaxed text-muted">
              A world where every business runs on intelligent systems that work
              around the clock — where growth isn&apos;t limited by manual
              capacity, and where AI amplifies human potential instead of
              replacing it.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Core Values"
            title={
              <>
                The principles that{" "}
                <span className="brand-gradient-text">guide us</span>
              </>
            }
            subtitle="These values shape every automation we build and every relationship we form."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.05}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
              >
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl brand-gradient-bg text-white">
                  <Icon name={v.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-bold">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {v.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-background-soft py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="Why Businesses Trust ScriptZen"
            title={
              <>
                A partner you can{" "}
                <span className="brand-gradient-text">rely on</span>
              </>
            }
            subtitle="We've earned the trust of businesses across industries by consistently delivering results."
          />
          <Reveal delay={0.1}>
            <ul className="grid gap-4 sm:grid-cols-1">
              {trustReasons.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm"
                >
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <CTABanner />

      <JsonLd
        data={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
    </>
  );
}
