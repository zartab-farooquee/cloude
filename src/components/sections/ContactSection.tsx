import { Mail, Phone, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { siteConfig, whatsappLink } from "@/lib/site";

const highlights = [
  "Free 30-minute strategy call",
  "Custom automation roadmap",
  "Transparent, fixed-price quotes",
  "No obligation, no pressure",
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>Get In Touch</Eyebrow>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Book your free{" "}
              <span className="brand-gradient-text">AI consultation</span>
            </h2>
            <p className="max-w-md text-pretty text-base leading-relaxed text-muted">
              Tell us about your business and we&apos;ll show you exactly where AI
              automation can save you time and money — usually within the first
              call.
            </p>

            <ul className="flex flex-col gap-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-2 flex flex-col gap-3 border-t border-border pt-6 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-3 hover:text-brand"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Mail className="h-5 w-5" />
                </span>
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="inline-flex items-center gap-3 hover:text-brand"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Phone className="h-5 w-5" />
                </span>
                {siteConfig.phone}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:text-brand"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                  <MessageCircle className="h-5 w-5" />
                </span>
                Chat on WhatsApp
              </a>
              <p className="inline-flex items-center gap-3 text-muted">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Clock className="h-5 w-5" />
                </span>
                Mon–Fri, 9am–6pm · Replies within 1 business day
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-brand/5 sm:p-8">
            <ConsultationForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
