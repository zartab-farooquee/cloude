import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo";
import type { FAQ } from "@/lib/services";

export function FAQSection({
  items,
  eyebrow = "FAQ",
  title = "Frequently asked questions",
  subtitle = "Everything you need to know about working with ScriptZen.",
  withSchema = true,
}: {
  items: FAQ[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  withSchema?: boolean;
}) {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <FAQAccordion items={items} />
      </Container>
      {withSchema ? <JsonLd data={faqSchema(items)} /> : null}
    </section>
  );
}
