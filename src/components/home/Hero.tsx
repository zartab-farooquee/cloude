"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Sparkles, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

const stats = [
  { label: "Hours saved", value: siteConfig.stats.hoursSaved },
  { label: "Businesses automated", value: siteConfig.stats.clients },
  { label: "Automations shipped", value: siteConfig.stats.automations },
  { label: "Client satisfaction", value: siteConfig.stats.satisfaction },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-brand-3/20 blur-[100px]" />
      </div>

      <Container className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background-soft px-4 py-1.5 text-xs font-semibold text-brand"
        >
          <Sparkles className="h-3.5 w-3.5" />
          AI Automation & Business Solutions
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        >
          Automate Your Business with{" "}
          <span className="brand-gradient-text">AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
        >
          ScriptZen builds AI agents, chatbots, and workflow automation that save
          you time, cut costs, and boost productivity — so your team can focus on
          the work that grows your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <Button href="/contact" size="lg">
            <CalendarCheck className="h-5 w-5" />
            Book Free Consultation
          </Button>
          <Button href="/services" size="lg" variant="outline">
            Get Started
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-6 flex items-center gap-2 text-sm text-muted"
        >
          <div className="flex" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          Rated {siteConfig.stats.satisfaction} by {siteConfig.stats.clients}{" "}
          businesses
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1 bg-card px-4 py-6"
            >
              <dt className="order-2 text-xs font-medium uppercase tracking-wide text-muted">
                {s.label}
              </dt>
              <dd className="order-1 text-3xl font-bold brand-gradient-text">
                {s.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
