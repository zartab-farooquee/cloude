import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className ?? ""}`}
      aria-label={`${siteConfig.name} home`}
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-xl brand-gradient-bg text-white shadow-md shadow-brand/30">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            d="M13.5 3 5 13h5l-1.5 8L19 11h-5l-.5-8Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight">
        Script<span className="brand-gradient-text">Zen</span>
      </span>
    </Link>
  );
}
