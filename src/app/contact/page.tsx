import type { Metadata } from "next";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig, whatsappLink } from "@/lib/site";
import { homeFaqs } from "@/lib/content";
import { pageMetadata, breadcrumbSchema, localBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact ScriptZen — Book Your Free AI Consultation",
  description:
    "Get in touch with ScriptZen to book a free AI automation consultation. Call, email, or message us on WhatsApp — we reply within one business day.",
  path: "/contact",
  keywords: ["contact ScriptZen", "AI automation consultation", "book AI consultation"],
});

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message us instantly",
    href: whatsappLink(),
    external: true,
  },
  {
    icon: MapPin,
    label: "Office",
    value: `${siteConfig.address.city}, ${siteConfig.address.region}`,
  },
];

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`,
  );
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
        title={
          <>
            Let&apos;s automate your{" "}
            <span className="brand-gradient-text">business</span>
          </>
        }
        subtitle="Book a free consultation or reach out through any channel below. We typically reply within one business day."
      />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((c, i) => {
              const inner = (
                <>
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      {c.label}
                    </p>
                    <p className="font-medium">{c.value}</p>
                  </div>
                </>
              );
              const cls =
                "flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/40";
              return (
                <Reveal key={c.label} delay={i * 0.05}>
                  {c.href ? (
                    <a
                      href={c.href}
                      {...(c.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={cls}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-brand/5 sm:p-8">
              <h2 className="mb-6 text-2xl font-bold">
                Book your free consultation
              </h2>
              <ConsultationForm />
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-3xl border border-border">
                <iframe
                  title={`${siteConfig.name} office location`}
                  src={mapSrc}
                  width="100%"
                  height="320"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-80 w-full border-0"
                />
              </div>
              <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-7">
                <h3 className="text-lg font-bold">Visit or reach us</h3>
                <p className="flex items-start gap-3 text-sm text-muted">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  {siteConfig.address.street}, {siteConfig.address.city},{" "}
                  {siteConfig.address.region} {siteConfig.address.postalCode}
                </p>
                <p className="flex items-start gap-3 text-sm text-muted">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  Monday – Friday, 9:00am – 6:00pm
                </p>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <FAQSection
        items={homeFaqs}
        title="Questions before you book?"
        subtitle="Here are answers to what most businesses ask before their first consultation."
      />

      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
    </>
  );
}
