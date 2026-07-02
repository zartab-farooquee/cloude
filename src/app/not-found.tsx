import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="text-7xl font-bold brand-gradient-text sm:text-9xl">
          404
        </span>
        <h1 className="text-2xl font-bold sm:text-3xl">Page not found</h1>
        <p className="max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/">
            <Home className="h-4 w-4" /> Back home
          </Button>
          <Button href="/services" variant="outline">
            Explore services <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
