import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";

type NavItem = { label: string; href: string; testId: string };

const NAV: NavItem[] = [
  { label: "About", href: "#about", testId: "nav-about" },
  { label: "Services", href: "#services", testId: "nav-services" },
  { label: "Industries", href: "#industries", testId: "nav-industries" },
  { label: "Why us", href: "#why", testId: "nav-why" },
  { label: "Process", href: "#process", testId: "nav-process" },
  { label: "FAQ", href: "#faq", testId: "nav-faq" },
  { label: "Contact", href: "#contact", testId: "nav-contact" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: [0.1, 0.2, 0.4] },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids.join("|")]);

  return active;
}

export function AnchorNav() {
  const ids = useMemo(() => NAV.map((n) => n.href.replace("#", "")), []);
  const active = useActiveSection(ids);

  const linkBase =
    "px-3 py-2 rounded-xl text-sm font-semibold tracking-tight transition-all duration-300 ease-out ring-focus " +
    "text-foreground/80 hover:text-foreground hover:bg-secondary/70 focus-visible:bg-secondary/70";

  return (
    <div
      className="
        sticky top-0 z-50
        border-b border-border/60
        bg-background/70 backdrop-blur-xl
      "
      data-testid="site-header"
    >
      <div className="container-pad">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div
              className="
                h-10 w-10 rounded-2xl
                bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10
                border border-border/60
                shadow-sm
                grid place-items-center
              "
              aria-hidden="true"
            >
              <div className="h-3.5 w-3.5 rounded-md bg-primary shadow-[0_10px_30px_-14px_hsl(var(--primary)/0.75)]" />
            </div>

            <div className="leading-tight">
              <div className="font-display text-base sm:text-lg" data-testid="company-name">
                Grain & Agriculture Products Commission Agents
              </div>
              <div className="text-xs text-muted-foreground" data-testid="company-tagline">
                {/* Trusted representation. Measurable growth. */}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1.5">
            {NAV.map((item) => {
              const isActive = active === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  data-testid={item.testId}
                  className={cn(
                    linkBase,
                    isActive &&
                      "text-foreground bg-secondary/80 shadow-sm border border-border/60",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle data-testid="theme-toggle" />

            <Button
              asChild
              className="
                hidden sm:inline-flex
                rounded-xl px-4
                bg-gradient-to-r from-primary to-primary/85
                text-primary-foreground shadow-soft
                hover:shadow-lift hover:-translate-y-0.5
                active:translate-y-0
                transition-all duration-300 ease-out
              "
              data-testid="header-cta"
            >
              <a href="#contact">Request a callback</a>
            </Button>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    className="
                      h-10 w-10 rounded-xl p-0
                      bg-card/70 border-border/70 backdrop-blur
                      hover:bg-card hover:border-border
                      shadow-sm hover:shadow-md
                      transition-all duration-300 ease-out
                    "
                    data-testid="nav-mobile-open"
                    aria-label="Open menu"
                    title="Open menu"
                  >
                    <Menu className="h-4.5 w-4.5" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[320px] bg-background/85 backdrop-blur-xl">
                  <SheetHeader>
                    <SheetTitle className="font-display">Navigate</SheetTitle>
                  </SheetHeader>

                  <div className="mt-6 grid gap-2">
                    {NAV.map((item) => {
                      const isActive = active === item.href.replace("#", "");
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          data-testid={`${item.testId}-mobile`}
                          className={cn(
                            "rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300",
                            "bg-secondary/40 hover:bg-secondary/70 border border-border/60",
                            isActive && "bg-secondary/80",
                          )}
                        >
                          {item.label}
                        </a>
                      );
                    })}

                    <a
                      href="#contact"
                      data-testid="nav-mobile-cta"
                      className="
                        mt-2 inline-flex items-center justify-center
                        rounded-xl px-4 py-3 text-sm font-semibold
                        bg-gradient-to-r from-primary to-primary/85
                        text-primary-foreground shadow-soft
                        hover:shadow-lift
                        transition-all duration-300
                      "
                    >
                      Request a callback
                    </a>

                    <div className="mt-3 flex items-center justify-between rounded-xl border border-border/60 bg-card/60 p-3">
                      <div className="text-sm font-semibold">Theme</div>
                      <ThemeToggle data-testid="theme-toggle-mobile" />
                    </div>

                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => {
                        // Close sheet via Escape simulation: Radix listens to it.
                        document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
                      }}
                      className="mt-1 justify-start rounded-xl"
                      data-testid="nav-mobile-close"
                    >
                      <X className="mr-2 h-4 w-4" />
                      Close
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
