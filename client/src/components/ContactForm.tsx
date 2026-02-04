import { useMemo, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Building2, User, Send } from "lucide-react";

type Field = "name" | "email" | "company" | "phone" | "message";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm({ "data-testid": testId }: { "data-testid"?: string }) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [fieldError, setFieldError] = useState<Partial<Record<Field, string>>>({});

  const canSubmit = useMemo(() => {
    if (isSubmitting) return false;
    if (form.name.trim().length < 2) return false;
    if (!emailRegex.test(form.email.trim())) return false;
    if (form.message.trim().length < 10) return false;
    return true;
  }, [isSubmitting, form.email, form.message, form.name]);

  function setField<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFieldError((prev) => ({ ...prev, [key]: undefined }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFieldError({});

    // Frontend validation
    const nextErrors: Partial<Record<Field, string>> = {};
    if (form.name.trim().length < 2) nextErrors.name = "Please enter your full name.";
    if (!emailRegex.test(form.email.trim())) nextErrors.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10) nextErrors.message = "Please provide a short message (10+ characters).";

    if (Object.keys(nextErrors).length) {
      setFieldError(nextErrors);
      toast({
        title: "Please check your details",
        description: "A few fields need attention before we can send your inquiry.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate sending (in a real app, you'd send to a backend or email service)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Inquiry received",
        description: "Thanks for reaching out! We'll get back to you soon.",
      });

      setForm({ name: "", email: "", company: "", phone: "", message: "" });
      setFieldError({});
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      toast({
        title: "Couldn't send inquiry",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 rounded-3xl hero-mesh opacity-70" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 backdrop-blur-xl shadow-soft">
        <div className="grid gap-0 lg:grid-cols-5">
          <div className="lg:col-span-2 p-7 sm:p-8 border-b lg:border-b-0 lg:border-r border-border/60">
            <div className="flex items-center gap-2">
              <Badge className="rounded-full bg-secondary text-foreground border border-border/60" data-testid="contact-badge">
                Contact
              </Badge>
              <div className="text-xs text-muted-foreground" data-testid="contact-response-time">
                Typical response: within 1 business day
              </div>
            </div>

            <h3 className="mt-4 text-2xl sm:text-3xl leading-tight" data-testid="contact-title">
              Tell us what you're selling — we'll tell you how we'll grow it.
            </h3>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed" data-testid="contact-subtitle">
              We represent manufacturers and service providers with a disciplined pipeline:
              targeted outreach, relationship-led selling, and transparent reporting.
            </p>

            <div className="mt-6 grid gap-3 text-sm">
              <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-secondary/35 p-4">
                <Mail className="mt-0.5 h-4.5 w-4.5 text-primary" />
                <div>
                  <div className="font-semibold" data-testid="contact-email-label">Email</div>
                  <div className="text-muted-foreground" data-testid="contact-email-value">hello@yourfirm.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-secondary/35 p-4">
                <Phone className="mt-0.5 h-4.5 w-4.5 text-primary" />
                <div>
                  <div className="font-semibold" data-testid="contact-phone-label">Phone</div>
                  <div className="text-muted-foreground" data-testid="contact-phone-value">+1 (000) 000-0000</div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-secondary/35 p-4">
                <Building2 className="mt-0.5 h-4.5 w-4.5 text-primary" />
                <div>
                  <div className="font-semibold" data-testid="contact-address-label">Office</div>
                  <div className="text-muted-foreground" data-testid="contact-address-value">
                    123 Market Street, Suite 400<br />Your City, Country
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 p-7 sm:p-8">
            <form onSubmit={onSubmit} className="grid gap-4" data-testid={testId ?? "contact-form"}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground" htmlFor="name">
                    Full name
                  </label>
                  <div className="mt-2 relative">
                    <User className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => setField("name", e.target.value)}
                      placeholder="Jane Doe"
                      className="pl-9 h-11 rounded-xl bg-background/60 border-border/70 ring-focus"
                      data-testid="contact-name"
                      aria-invalid={!!fieldError.name}
                    />
                  </div>
                  {fieldError.name ? (
                    <div className="mt-2 text-xs text-destructive" data-testid="contact-name-error">
                      {fieldError.name}
                    </div>
                  ) : null}
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted-foreground" htmlFor="email">
                    Email
                  </label>
                  <div className="mt-2 relative">
                    <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      value={form.email}
                      onChange={(e) => setField("email", e.target.value)}
                      placeholder="jane@company.com"
                      className="pl-9 h-11 rounded-xl bg-background/60 border-border/70 ring-focus"
                      data-testid="contact-email"
                      aria-invalid={!!fieldError.email}
                    />
                  </div>
                  {fieldError.email ? (
                    <div className="mt-2 text-xs text-destructive" data-testid="contact-email-error">
                      {fieldError.email}
                    </div>
                  ) : null}
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted-foreground" htmlFor="company">
                    Company <span className="text-muted-foreground/70">(optional)</span>
                  </label>
                  <div className="mt-2 relative">
                    <Building2 className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="company"
                      value={form.company}
                      onChange={(e) => setField("company", e.target.value)}
                      placeholder="Company Inc."
                      className="pl-9 h-11 rounded-xl bg-background/60 border-border/70 ring-focus"
                      data-testid="contact-company"
                      aria-invalid={!!fieldError.company}
                    />
                  </div>
                  {fieldError.company ? (
                    <div className="mt-2 text-xs text-destructive" data-testid="contact-company-error">
                      {fieldError.company}
                    </div>
                  ) : null}
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted-foreground" htmlFor="phone">
                    Phone <span className="text-muted-foreground/70">(optional)</span>
                  </label>
                  <div className="mt-2 relative">
                    <Phone className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      value={form.phone}
                      onChange={(e) => setField("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="pl-9 h-11 rounded-xl bg-background/60 border-border/70 ring-focus"
                      data-testid="contact-phone"
                      aria-invalid={!!fieldError.phone}
                    />
                  </div>
                  {fieldError.phone ? (
                    <div className="mt-2 text-xs text-destructive" data-testid="contact-phone-error">
                      {fieldError.phone}
                    </div>
                  ) : null}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground" htmlFor="message">
                  What can we help with?
                </label>
                <div className="mt-2">
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setField("message", e.target.value)}
                    placeholder="Share a quick overview: products, territory, current pipeline, goals…"
                    className="min-h-[132px] rounded-xl bg-background/60 border-border/70 ring-focus"
                    data-testid="contact-message"
                    aria-invalid={!!fieldError.message}
                  />
                </div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  {fieldError.message ? (
                    <div className="text-xs text-destructive" data-testid="contact-message-error">
                      {fieldError.message}
                    </div>
                  ) : (
                    <div className="text-xs text-muted-foreground" data-testid="contact-message-hint">
                      Be as brief or detailed as you'd like — we'll follow up.
                    </div>
                  )}
                  <div className="text-xs text-muted-foreground tabular-nums" data-testid="contact-message-count">
                    {form.message.trim().length}/10+
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
                <div className="text-xs text-muted-foreground" data-testid="contact-privacy">
                  By submitting, you agree we can contact you about your inquiry. No spam.
                </div>

                <Button
                  type="submit"
                  disabled={!canSubmit}
                  data-testid="contact-submit"
                  className="
                    rounded-xl px-5 h-11
                    bg-gradient-to-r from-primary to-primary/85
                    text-primary-foreground shadow-soft
                    hover:shadow-lift hover:-translate-y-0.5
                    active:translate-y-0
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none
                    transition-all duration-300 ease-out
                  "
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span
                        className="h-4 w-4 rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground animate-spin"
                        aria-hidden="true"
                      />
                      Sending…
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send inquiry
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
