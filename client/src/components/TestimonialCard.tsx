import { Star } from "lucide-react";

export function TestimonialCard({
  quote,
  name,
  role,
  "data-testid": testId,
}: {
  quote: string;
  name: string;
  role: string;
  "data-testid"?: string;
}) {
  return (
    <div
      className="
        relative overflow-hidden rounded-2xl p-7
        bg-card/70 border border-border/60
        shadow-sm hover:shadow-soft hover:-translate-y-0.5
        transition-all duration-300
      "
      data-testid={testId}
    >
      <div
        className="
          absolute -right-24 -top-24 h-56 w-56 rounded-full
          bg-gradient-to-br from-accent/18 via-primary/14 to-transparent
          blur-3xl
        "
        aria-hidden="true"
      />
      <div className="relative">
        <div className="flex gap-1 text-accent" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/90">
          “{quote}”
        </p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold">{name}</div>
            <div className="text-xs text-muted-foreground">{role}</div>
          </div>
          <div
            className="
              hidden sm:block h-10 w-10 rounded-2xl
              bg-gradient-to-br from-secondary/80 to-secondary/40
              border border-border/60
            "
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
