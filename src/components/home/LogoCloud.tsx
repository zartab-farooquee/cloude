import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { clientLogos, trustBadges } from "@/lib/content";
import { ShieldCheck } from "lucide-react";

export function LogoCloud() {
  return (
    <section className="border-y border-border bg-background-soft py-12">
      <Container>
        <Reveal className="flex flex-col items-center gap-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            Trusted by growing teams across industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="text-lg font-bold tracking-tight text-muted opacity-70 transition-opacity hover:opacity-100"
              >
                {logo}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-brand" />
                {badge}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
