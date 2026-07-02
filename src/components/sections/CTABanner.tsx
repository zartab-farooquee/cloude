import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink } from "@/lib/site";

export function CTABanner({
  title = "Ready to Automate Your Business with AI?",
  subtitle = "Book a free consultation and get a custom automation roadmap for your business — no obligation, no jargon.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl brand-gradient-bg px-6 py-16 text-center shadow-2xl shadow-brand/30 sm:px-12">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="text-pretty text-base text-white/90 sm:text-lg">
              {subtitle}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-brand hover:bg-white"
              >
                Book Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={whatsappLink()}
                external
                size="lg"
                variant="outline"
                className="border-white/60 text-white hover:border-white hover:text-white"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
