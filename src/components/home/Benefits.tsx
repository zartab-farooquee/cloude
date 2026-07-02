import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { benefits } from "@/lib/content";

export function Benefits() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="AI Automation Benefits"
          title={
            <>
              Real outcomes, <span className="brand-gradient-text">not hype</span>
            </>
          }
          subtitle="Automation done right delivers measurable results across your entire operation."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal
              key={b.title}
              delay={i * 0.05}
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/10"
            >
              <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:brand-gradient-bg group-hover:text-white">
                <Icon name={b.icon} className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold">{b.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {b.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
