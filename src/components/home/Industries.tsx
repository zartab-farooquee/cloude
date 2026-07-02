import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { industries } from "@/lib/content";

export function Industries() {
  return (
    <section className="border-y border-border bg-background-soft py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Industries We Serve"
          title={
            <>
              Automation tailored to{" "}
              <span className="brand-gradient-text">your industry</span>
            </>
          }
          subtitle="We understand the workflows, tools, and compliance needs of the sectors we work with."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal
              key={ind.name}
              delay={i * 0.04}
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/40"
            >
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:brand-gradient-bg group-hover:text-white">
                <Icon name={ind.icon} className="h-5 w-5" />
              </span>
              <h3 className="font-bold">{ind.name}</h3>
              <p className="text-sm leading-relaxed text-muted">{ind.blurb}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
