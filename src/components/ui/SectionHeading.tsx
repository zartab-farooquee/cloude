import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading className="max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </Heading>
      {subtitle ? (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
