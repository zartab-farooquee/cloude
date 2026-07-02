import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";
import { Logo } from "./Logo";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-background-soft">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.name} is an AI automation agency helping businesses
              save time, cut costs, and grow with AI agents, chatbots, and
              workflow automation.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 hover:text-brand"
              >
                <Mail className="h-4 w-4" /> {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="inline-flex items-center gap-2 hover:text-brand"
              >
                <Phone className="h-4 w-4" /> {siteConfig.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {siteConfig.address.city},{" "}
                {siteConfig.address.region}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="hover:text-brand"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Get Started
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
              <li>
                <Link href="/contact" className="hover:text-brand">
                  Book Free Consultation
                </Link>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand">
                  Explore Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted sm:flex-row">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="hover:text-brand">
              Blog
            </Link>
            <Link href="/services" className="hover:text-brand">
              Services
            </Link>
            <Link href="/contact" className="hover:text-brand">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
