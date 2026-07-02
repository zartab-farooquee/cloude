"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { blogCategories, type BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? posts
        : posts.filter((p) => p.category === active),
    [active, posts],
  );

  const tabs = ["All", ...blogCategories];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === tab
                ? "border-brand bg-brand/10 text-brand"
                : "border-border bg-card text-muted hover:text-foreground",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post, i) => (
          <motion.article
            key={post.slug}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10"
          >
            <span className="w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              {post.category}
            </span>
            <h2 className="text-lg font-bold leading-snug">
              <Link href={`/blog/${post.slug}`} className="hover:text-brand">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm leading-relaxed text-muted">{post.excerpt}</p>
            <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readingTime}
              </span>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
            >
              Read article
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
