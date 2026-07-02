"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, CalendarCheck } from "lucide-react";

export function StickyCTA() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border glass px-4 py-3 transition-transform duration-300 sm:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 rounded-full brand-gradient-bg px-6 py-3 text-sm font-semibold text-white"
      >
        <CalendarCheck className="h-4 w-4" />
        Book Free Consultation
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
