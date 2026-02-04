import { useEffect, useMemo, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return prefersDark ? "dark" : "light";
}

export function ThemeToggle({ "data-testid": testId }: { "data-testid"?: string }) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  const nextTheme = useMemo(() => (theme === "dark" ? "light" : "dark"), [theme]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => setTheme(nextTheme)}
      data-testid={testId}
      className="
        h-10 w-10 rounded-xl p-0
        bg-card/70 border-border/70 backdrop-blur
        hover:bg-card hover:border-border
        shadow-sm hover:shadow-md
        transition-all duration-300 ease-out
      "
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <span className="relative">
        <Sun
          className={[
            "h-4.5 w-4.5 transition-all duration-300",
            theme === "dark" ? "opacity-0 -rotate-90 scale-75" : "opacity-100 rotate-0 scale-100",
          ].join(" ")}
        />
        <Moon
          className={[
            "absolute inset-0 h-4.5 w-4.5 transition-all duration-300",
            theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75",
          ].join(" ")}
        />
      </span>
    </Button>
  );
}
