import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function FeatureCard({
  icon,
  title,
  description,
  className,
  "data-testid": testId,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  "data-testid"?: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl p-6 sm:p-7",
        "bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/55",
        "border border-border/60 shadow-sm",
        "hover:shadow-soft hover:border-border hover:-translate-y-0.5",
        "transition-all duration-300 ease-out",
        className,
      )}
      data-testid={testId}
    >
      <div
        className="
          pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full
          bg-gradient-to-br from-primary/18 via-accent/14 to-transparent
          blur-2xl opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
        aria-hidden="true"
      />
      <div className="flex items-start gap-4">
        <div
          className="
            grid h-12 w-12 place-items-center rounded-2xl
            bg-gradient-to-br from-secondary/80 to-secondary/40
            border border-border/60
            text-primary
            shadow-sm
          "
          aria-hidden="true"
        >
          {icon}
        </div>
        <div className="min-w-0">
          <div className="text-lg font-semibold tracking-tight">{title}</div>
          <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
