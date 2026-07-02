import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/lib/services";

export function ServicesOverview() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              End-to-end <span className="brand-gradient-text">AI automation</span>{" "}
              services
            </>
          }
          subtitle="From chatbots and voice agents to CRM and workflow automation, we build the systems that run your business on autopilot."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={i * 0.05}
              as="article"
              className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10"
            >
              <span className="inline-grid h-12 w-12 place-items-center rounded-xl brand-gradient-bg text-white shadow-lg shadow-brand/20">
                <Icon name={service.icon} className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {service.short}
              </p>
              <Link
                href={`/services#${service.slug}`}
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
