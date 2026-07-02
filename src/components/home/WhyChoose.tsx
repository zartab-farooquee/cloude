import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { whyChoose } from "@/lib/content";

export function WhyChoose() {
  return (
    <section className="border-y border-border bg-background-soft py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Why ScriptZen"
          title={
            <>
              The automation partner businesses{" "}
              <span className="brand-gradient-text">trust</span>
            </>
          }
          subtitle="We combine deep AI expertise with a relentless focus on ROI, security, and results you can measure."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.05}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/40"
            >
              <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
