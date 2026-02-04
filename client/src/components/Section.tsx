import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  "data-testid": testId,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  "data-testid"?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", className)} data-testid={testId}>
      <div className="container-pad">
        <div className="max-w-3xl">
          {eyebrow ? (
            <div className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-primary/90">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-balance">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          ) : null}
        </div>

        {children ? <div className="mt-10 lg:mt-12">{children}</div> : null}
      </div>
    </section>
  );
}
