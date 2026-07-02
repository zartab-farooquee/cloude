import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { BlogList } from "@/components/blog/BlogList";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts } from "@/lib/blog";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Blog — AI Automation, Chatbots & Business Growth Insights",
  description:
    "Practical guides on AI automation, chatbots, CRM, lead generation, and productivity from the ScriptZen team. Learn how to automate and grow your business.",
  path: "/blog",
  keywords: [
    "AI Automation blog",
    "business automation insights",
    "AI chatbot tips",
    "CRM automation",
    "lead generation",
  ],
});

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Blog`,
    url: `${siteConfig.url}/blog`,
    description:
      "Insights on AI automation, chatbots, CRM, lead generation, and productivity.",
    blogPost: blogPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      datePublished: p.date,
      url: `${siteConfig.url}/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <PageHero
        eyebrow="Blog"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
        title={
          <>
            Insights on{" "}
            <span className="brand-gradient-text">AI & automation</span>
          </>
        }
        subtitle="Actionable guides, strategies, and ideas to help you automate smarter and grow faster."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <BlogList posts={blogPosts} />
        </Container>
      </section>

      <CTABanner />

      <JsonLd
        data={[
          blogSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
    </>
  );
}
