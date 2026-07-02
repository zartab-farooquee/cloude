import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts, getPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { pageMetadata, articleSchema, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return pageMetadata({ title: "Article not found", description: "" });
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    type: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  const fallback = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const suggestions = related.length ? related : fallback;

  return (
    <>
      <article className="pt-14 sm:pt-20">
        <Container className="flex max-w-3xl flex-col gap-6">
          <Link
            href="/blog"
            className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-muted hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <span className="w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            {post.category}
          </span>
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4" /> {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" /> {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readingTime}
            </span>
          </div>
        </Container>

        <Container className="mt-10 flex max-w-3xl flex-col gap-6 border-t border-border pt-10">
          <p className="text-pretty text-lg font-medium leading-relaxed text-foreground">
            {post.excerpt}
          </p>
          {post.content.map((para, i) => (
            <p key={i} className="text-pretty leading-relaxed text-muted">
              {para}
            </p>
          ))}

          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-border bg-card p-7">
            <h2 className="text-xl font-bold">
              Ready to automate this in your business?
            </h2>
            <p className="text-sm text-muted">
              Book a free consultation and we&apos;ll show you exactly how to put
              these ideas into practice.
            </p>
            <div>
              <Button href="/contact">
                Book Free Consultation
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </article>

      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold">Keep reading</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {suggestions.map((p) => (
              <article
                key={p.slug}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/40"
              >
                <span className="w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                  {p.category}
                </span>
                <h3 className="font-bold leading-snug">
                  <Link href={`/blog/${p.slug}`} className="hover:text-brand">
                    {p.title}
                  </Link>
                </h3>
                <p className="text-sm leading-relaxed text-muted">{p.excerpt}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />

      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
    </>
  );
}
