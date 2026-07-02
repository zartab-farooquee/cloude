import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Client Testimonials"
          title={
            <>
              Loved by teams who{" "}
              <span className="brand-gradient-text">ship results</span>
            </>
          }
          subtitle="Don't take our word for it — here's what our clients say about working with ScriptZen."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.05}
              as="article"
              className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-brand/20" />
              </div>
              <p className="text-pretty text-base leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto flex items-center justify-between gap-4 border-t border-border pt-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full brand-gradient-bg text-sm font-bold text-white">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                  {t.result}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
