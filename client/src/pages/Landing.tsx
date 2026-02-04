import { Seo } from "@/components/Seo";
import { AnchorNav } from "@/components/AnchorNav";
import { Section } from "@/components/Section";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Faq } from "@/components/Faq";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Factory,
  Globe2,
  Handshake,
  Layers3,
  LineChart,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

const SERVICES = [
  {
    icon: <Target className="h-5 w-5" />,
    title: "Territory growth strategy",
    description:
      "Define territories, target accounts, and revenue goals — built for long sales cycles and repeat buyers.",
    id: "svc-1",
  },
  {
    icon: <Handshake className="h-5 w-5" />,
    title: "Relationship-led selling",
    description:
      "We build trust with buyers, distributors, and contractors — turning introductions into durable revenue.",
    id: "svc-2",
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: "Pipeline + forecasting",
    description:
      "A disciplined process with clear stages, probability weighting, and deal notes you can act on.",
    id: "svc-3",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Market intelligence",
    description:
      "We capture competitor pricing, channel feedback, and product positioning — so you never sell blind.",
    id: "svc-4",
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    title: "Channel expansion",
    description:
      "We develop distributor and rep networks that align with your margins and long-term brand.",
    id: "svc-5",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Brand-safe representation",
    description:
      "Your company is represented with consistency, professionalism, and clear messaging across every touchpoint.",
    id: "svc-6",
  },
];

const INDUSTRIES = [
  { title: "Industrial supplies", note: "OEM, MRO, and engineered components", icon: <Factory className="h-5 w-5" />, id: "ind-1" },
  { title: "Building materials", note: "Commercial & residential channels", icon: <Layers3 className="h-5 w-5" />, id: "ind-2" },
  { title: "Manufacturing services", note: "Contract manufacturing & assembly", icon: <Sparkles className="h-5 w-5" />, id: "ind-3" },
  { title: "B2B SaaS (select)", note: "Operations and procurement tools", icon: <BadgeCheck className="h-5 w-5" />, id: "ind-4" },
];

const WHY = [
  {
    title: "Senior-level selling",
    description:
      "You get a strategic partner — not an outsourced SDR. We operate like an extension of your leadership.",
    id: "why-1",
  },
  {
    title: "Visibility without noise",
    description:
      "Clear reporting, tight feedback loops, and actionable insights — no vanity metrics.",
    id: "why-2",
  },
  {
    title: "Process you can audit",
    description:
      "Every account has a plan. Every deal has context. Every next step has an owner and a date.",
    id: "why-3",
  },
  {
    title: "Aligned incentives",
    description:
      "Commission-based outcomes keep our focus where it belongs: qualified pipeline and closed revenue.",
    id: "why-4",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery & alignment",
    desc: "We map your offer, ideal customers, positioning, and territory constraints. Then we define success.",
    id: "p-1",
  },
  {
    step: "02",
    title: "Account targeting",
    desc: "We build a focused list of accounts and channel partners — prioritized by fit and revenue potential.",
    id: "p-2",
  },
  {
    step: "03",
    title: "Outreach & meetings",
    desc: "Warm introductions, credible outreach, and consistent follow-up that respects buyer timelines.",
    id: "p-3",
  },
  {
    step: "04",
    title: "Pipeline execution",
    desc: "Qualification, proposals, objections, and negotiation — documented with clear next actions.",
    id: "p-4",
  },
  {
    step: "05",
    title: "Reporting & iteration",
    desc: "Monthly insights on what’s working, what’s not, and what we’ll do next to increase conversion.",
    id: "p-5",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "They opened doors we couldn’t. More importantly, they stayed in the deal — the pipeline quality improved immediately.",
    name: "VP Sales",
    role: "Industrial Manufacturer",
    id: "t-1",
  },
  {
    quote:
      "Professional, structured, and transparent. We always knew where we stood and what was happening next.",
    name: "CEO",
    role: "Building Materials Supplier",
    id: "t-2",
  },
  {
    quote:
      "A true partner. Their market feedback changed how we positioned the product — and accelerated our channel growth.",
    name: "Director of Growth",
    role: "B2B Services",
    id: "t-3",
  },
];

const FAQ_ITEMS = [
  {
    id: "1",
    q: "What does a commission agent do?",
    a: "We represent your company in a defined territory or channel, selling on your behalf and earning commission on closed revenue. You get experienced selling without the overhead of a full internal expansion.",
  },
  {
    id: "2",
    q: "How do you report progress?",
    a: "We provide a structured pipeline view (stages, next steps, risks) plus monthly summaries: wins, losses, key learnings, and recommended adjustments to targeting and messaging.",
  },
  {
    id: "3",
    q: "What types of companies do you work with?",
    a: "Most commonly: manufacturers, industrial suppliers, and B2B service providers with repeatable offerings. We can also support select B2B software if the buyer motion is relationship-driven.",
  },
  {
    id: "4",
    q: "How quickly can we start?",
    a: "Typically within 1–2 weeks. We begin with discovery, gather sales assets, build the target account list, then schedule outreach and meetings.",
  },
  {
    id: "5",
    q: "Do you require exclusivity?",
    a: "It depends on the product, territory, and channel. We’ll recommend an arrangement that protects both parties and keeps incentives aligned.",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Seo
        title="Om Convassing Agency — Trusted representation. Measurable growth."
        description="A premium commission agent firm helping manufacturers and B2B providers grow pipeline and revenue through disciplined, relationship-led sales execution."
        canonicalPath="/"
      />

      <AnchorNav />

      {/* HERO */}
      <header className="relative overflow-hidden hero-mesh">
        <div className="relative grain">
          <div className="container-pad">
            <div className="py-16 sm:py-20 lg:py-24">
              <div className="max-w-3xl animate-in-up">
                <Badge
                  className="
                    rounded-full border border-border/60 bg-card/60 text-foreground
                    backdrop-blur
                  "
                  data-testid="hero-badge"
                >
                  Commission agents for B2B growth
                </Badge>

                <h1
                  className="
                    mt-6 text-4xl sm:text-5xl lg:text-6xl
                    leading-[1.02] text-balance
                  "
                  data-testid="hero-title"
                >
                  Om Convassing Agency
                </h1>

                <p
                  className="
                    mt-5 text-base sm:text-lg lg:text-xl
                    text-muted-foreground leading-relaxed
                  "
                  data-testid="hero-subtitle"
                >
                  Representing manufacturers and B2B providers with a sales system built on
                  credibility, consistent execution, and transparent reporting — led by Ravi Gupta
                  and B.L. Gupta in Satna, Madhya Pradesh.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                  <Button
                    asChild
                    className="
                      h-12 rounded-xl px-6
                      bg-gradient-to-r from-primary to-primary/85
                      text-primary-foreground shadow-soft
                      hover:shadow-lift hover:-translate-y-0.5
                      active:translate-y-0
                      transition-all duration-300 ease-out
                    "
                    data-testid="hero-cta-primary"
                  >
                    <a href="#contact">
                      Request a callback
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="
                      h-12 rounded-xl px-6
                      bg-card/60 border-border/70 backdrop-blur
                      hover:bg-card hover:border-border
                      transition-all duration-300
                    "
                    data-testid="hero-cta-secondary"
                  >
                    <a href="#services">Explore services</a>
                  </Button>

                  <div
                    className="sm:ml-auto flex items-center gap-3 text-xs sm:text-sm text-muted-foreground"
                    data-testid="hero-proof"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.15)]" />
                      Relationship-first
                    </div>
                    <div className="hidden sm:block h-4 w-px bg-border/70" />
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_4px_hsl(var(--accent)/0.14)]" />
                      Pipeline clarity
                    </div>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3" data-testid="hero-metrics">
                  {[
                    { k: "30–90 days", v: "time to first qualified meetings", id: "m1" },
                    { k: "Monthly", v: "structured reporting cadence", id: "m2" },
                    { k: "Outcome-led", v: "commission-aligned incentives", id: "m3" },
                  ].map((m) => (
                    <div
                      key={m.id}
                      className="
                        rounded-2xl border border-border/60 bg-card/55 backdrop-blur
                        p-4 sm:p-5 shadow-sm
                      "
                      data-testid={`hero-metric-${m.id}`}
                    >
                      <div className="text-lg sm:text-xl font-semibold tracking-tight">{m.k}</div>
                      <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className="
              absolute inset-x-0 bottom-0 h-px
              bg-gradient-to-r from-transparent via-border/80 to-transparent
            "
            aria-hidden="true"
          />
        </div>
      </header>

      {/* ABOUT */}
      <Section
        id="about"
        eyebrow="About"
        title="A commission partner built for modern B2B buying."
        description="We combine territory planning, relationship-led outreach, and a measurable pipeline system — designed for manufacturers and B2B providers where trust wins deals."
        data-testid="section-about"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div
              className="
                rounded-3xl border border-border/60 bg-card/70 p-7 sm:p-8
                shadow-soft
              "
              data-testid="about-card"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    icon: <MapPin className="h-5 w-5" />,
                    title: "Territory coverage",
                    description:
                      "Local presence for meetings, job sites, and channel partners — with disciplined follow-up.",
                    id: "about-1",
                  },
                  {
                    icon: <ShieldCheck className="h-5 w-5" />,
                    title: "Brand integrity",
                    description:
                      "Your positioning and pricing are protected through consistent messaging and process.",
                    id: "about-2",
                  },
                  {
                    icon: <Handshake className="h-5 w-5" />,
                    title: "Long-term relationships",
                    description:
                      "We focus on accounts that fit — because repeat revenue is earned, not chased.",
                    id: "about-3",
                  },
                  {
                    icon: <BarChart3 className="h-5 w-5" />,
                    title: "Transparent reporting",
                    description:
                      "Know what’s happening, what’s next, and where deals are at risk — without micromanaging.",
                    id: "about-4",
                  },
                ].map((f) => (
                  <div
                    key={f.id}
                    className="flex items-start gap-3"
                    data-testid={`about-feature-${f.id}`}
                  >
                    <div
                      className="
                        grid h-11 w-11 place-items-center rounded-2xl
                        bg-secondary/60 border border-border/60
                        text-primary shadow-sm
                      "
                      aria-hidden="true"
                    >
                      {f.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{f.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {f.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="
                  mt-7 rounded-2xl border border-border/60 bg-secondary/35 p-5
                "
                data-testid="about-highlight"
              >
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <BadgeCheck className="h-4.5 w-4.5 text-accent" />
                  What clients remember
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Clarity. Consistency. Accountability. You’ll never wonder where a deal stands — or
                  what we’re doing to move it forward.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div
              className="
                h-full rounded-3xl border border-border/60
                bg-gradient-to-b from-card/70 to-card/40
                p-7 sm:p-8 shadow-soft
              "
              data-testid="about-side"
            >
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-primary/90">
                Typical engagement
              </div>
              <div className="mt-3 text-2xl leading-tight">Defined territory, defined outcomes.</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                We align on the accounts, channels, and monthly activity expectations. Then we execute
                with a repeatable cadence and a shared pipeline view.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  { k: "Territory", v: "Region / channel-based", id: "s1" },
                  { k: "Model", v: "Commission + aligned incentives", id: "s2" },
                  { k: "Cadence", v: "Weekly activity, monthly review", id: "s3" },
                ].map((r) => (
                  <div
                    key={r.id}
                    className="rounded-2xl border border-border/60 bg-secondary/35 p-4"
                    data-testid={`about-side-${r.id}`}
                  >
                    <div className="text-xs text-muted-foreground">{r.k}</div>
                    <div className="mt-1 text-sm font-semibold">{r.v}</div>
                  </div>
                ))}
              </div>

              <Button
                asChild
                variant="outline"
                className="
                  mt-6 w-full h-11 rounded-xl
                  bg-card/60 border-border/70 backdrop-blur
                  hover:bg-card hover:border-border
                  transition-all duration-300
                "
                data-testid="about-cta"
              >
                <a href="#contact">Discuss fit</a>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        id="services"
        eyebrow="Services"
        title="Everything you need to build pipeline — without building a team."
        description="A complete commission-agent workflow: targeting, outreach, meetings, negotiation, and reporting — delivered with professional consistency."
        data-testid="section-services"
        className="bg-secondary/25"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <FeatureCard
              key={s.id}
              icon={s.icon}
              title={s.title}
              description={s.description}
              data-testid={`service-${s.id}`}
            />
          ))}
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section
        id="industries"
        eyebrow="Industries"
        title="Built for complex products and considered purchases."
        description="We thrive where trust and technical credibility matter — and where relationships create compounding revenue."
        data-testid="section-industries"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((i) => (
            <div
              key={i.id}
              className="
                rounded-2xl border border-border/60 bg-card/70 p-6
                shadow-sm hover:shadow-soft hover:-translate-y-0.5
                transition-all duration-300
              "
              data-testid={`industry-${i.id}`}
            >
              <div
                className="
                  grid h-12 w-12 place-items-center rounded-2xl
                  bg-secondary/60 border border-border/60
                  text-primary
                "
                aria-hidden="true"
              >
                {i.icon}
              </div>
              <div className="mt-4 text-base font-semibold">{i.title}</div>
              <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.note}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY */}
      <Section
        id="why"
        eyebrow="Why choose us"
        title="A premium selling experience for you — and for your buyers."
        description="We’re deliberate about the accounts we pursue, the way we show up, and the clarity we maintain from first call to closed deal."
        data-testid="section-why"
        className="bg-secondary/25"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="grid gap-5">
            {WHY.map((w) => (
              <div
                key={w.id}
                className="
                  rounded-2xl border border-border/60 bg-card/70 p-6 sm:p-7
                  shadow-sm hover:shadow-soft
                  transition-all duration-300
                "
                data-testid={`why-${w.id}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="
                      mt-0.5 h-10 w-10 rounded-2xl
                      bg-gradient-to-br from-primary/20 via-accent/12 to-transparent
                      border border-border/60
                      grid place-items-center
                      text-primary
                    "
                    aria-hidden="true"
                  >
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold tracking-tight">{w.title}</div>
                    <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {w.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:pl-2">
            <div
              className="
                h-full rounded-3xl border border-border/60 bg-card/70
                p-7 sm:p-8 shadow-soft
                relative overflow-hidden
              "
              data-testid="why-scorecard"
            >
              <div
                className="
                  absolute -right-28 -top-28 h-72 w-72 rounded-full
                  bg-gradient-to-br from-primary/18 via-accent/14 to-transparent
                  blur-3xl
                "
                aria-hidden="true"
              />
              <div className="relative">
                <div className="text-xs font-semibold tracking-[0.18em] uppercase text-primary/90">
                  What you get
                </div>
                <div className="mt-3 text-2xl sm:text-3xl leading-tight">
                  A sales partner you can trust with your reputation.
                </div>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Our operating model is simple: fewer clients, deeper focus, and measurable execution.
                  We’d rather win the right deals than chase the wrong ones.
                </p>

                <div className="mt-7 grid gap-3">
                  {[
                    { label: "Account plans", value: "Built + maintained", icon: <Target className="h-4.5 w-4.5" /> },
                    { label: "Meeting quality", value: "Qualified + documented", icon: <Handshake className="h-4.5 w-4.5" /> },
                    { label: "Visibility", value: "Pipeline + next steps", icon: <BarChart3 className="h-4.5 w-4.5" /> },
                    { label: "Integrity", value: "Brand-safe execution", icon: <ShieldCheck className="h-4.5 w-4.5" /> },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-2xl border border-border/60 bg-secondary/35 p-4"
                      data-testid={`why-score-${idx + 1}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-primary" aria-hidden="true">
                          {row.icon}
                        </div>
                        <div className="text-sm font-semibold">{row.label}</div>
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{row.value}</div>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="
                    mt-7 w-full h-11 rounded-xl
                    bg-gradient-to-r from-accent to-accent/85
                    text-accent-foreground shadow-soft
                    hover:shadow-lift hover:-translate-y-0.5
                    transition-all duration-300
                  "
                  data-testid="why-cta"
                >
                  <a href="#contact">
                    Talk to us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        id="process"
        eyebrow="How it works"
        title="A clear process — so progress never depends on hope."
        description="We run a repeatable sales system that creates momentum while protecting your margins, messaging, and buyer experience."
        data-testid="section-process"
      >
        <div className="grid gap-5 lg:grid-cols-5">
          {PROCESS.map((p) => (
            <div
              key={p.id}
              className="
                relative overflow-hidden rounded-2xl border border-border/60
                bg-card/70 p-6 sm:p-7 shadow-sm
                hover:shadow-soft hover:-translate-y-0.5
                transition-all duration-300
              "
              data-testid={`process-${p.id}`}
            >
              <div
                className="
                  absolute -right-16 -top-16 h-44 w-44 rounded-full
                  bg-gradient-to-br from-primary/16 via-accent/10 to-transparent
                  blur-2xl
                "
                aria-hidden="true"
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="font-display text-xl">{p.step}</div>
                  <div className="text-primary" aria-hidden="true">
                    <ArrowRight className="h-4.5 w-4.5 opacity-60" />
                  </div>
                </div>
                <div className="mt-3 text-base font-semibold">{p.title}</div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="
            mt-8 rounded-3xl border border-border/60 bg-secondary/25 p-6 sm:p-8
            flex flex-col md:flex-row md:items-center gap-5
          "
          data-testid="process-callout"
        >
          <div className="flex-1">
            <div className="text-lg sm:text-xl font-semibold tracking-tight">
              Want a transparent pipeline without the overhead?
            </div>
            <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Share your territory and product. We’ll respond with next steps and a suggested 30-day plan.
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="
                h-11 rounded-xl px-5
                bg-gradient-to-r from-primary to-primary/85
                text-primary-foreground shadow-soft
                hover:shadow-lift hover:-translate-y-0.5
                transition-all duration-300
              "
              data-testid="process-cta-primary"
            >
              <a href="#contact">Get started</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="
                h-11 rounded-xl px-5
                bg-card/60 border-border/70 backdrop-blur
                hover:bg-card hover:border-border
                transition-all duration-300
              "
              data-testid="process-cta-secondary"
            >
              <a href="#faq">Read FAQ</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section
        id="testimonials"
        eyebrow="Testimonials"
        title="The results feel obvious when the process is disciplined."
        description="A few words from clients we’ve supported across manufacturers, suppliers, and B2B services."
        data-testid="section-testimonials"
        className="bg-secondary/25"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard
              key={t.id}
              quote={t.quote}
              name={t.name}
              role={t.role}
              data-testid={`testimonial-${t.id}`}
            />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        id="faq"
        eyebrow="FAQ"
        title="Clear answers to common questions."
        description="If you have a specific territory, channel, or product question, send us a note — we’ll respond quickly."
        data-testid="section-faq"
      >
        <Faq items={FAQ_ITEMS} data-testid="faq-accordion" />
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        eyebrow="Contact"
        title="Let’s talk about your territory and growth goals."
        description="Send a quick note and we’ll schedule a call. No obligations — just clarity on fit and next steps."
        data-testid="section-contact"
        className="pb-24"
      >
        <ContactForm data-testid="contact-form-root" />
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 bg-background" data-testid="site-footer">
        <div className="container-pad py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="font-display text-lg" data-testid="footer-brand">
                Om Convassing Agency
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed" data-testid="footer-blurb">
                Premium representation for manufacturers and B2B providers — led by Ravi Gupta and B.L. Gupta in Satna.
              </p>
            </div>

            <div className="grid gap-2 text-sm" data-testid="footer-contact">
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                Contact
              </div>
              <div className="text-muted-foreground">8269666320 (Ravi Gupta)</div>
              <div className="text-muted-foreground">9303320625 (B.L. Gupta)</div>
              <div className="text-muted-foreground">T.T Nagar, Infront of Shivpuram Colony, Satna Madhya Pradesh (485001)</div>
            </div>

            <div className="md:text-right">
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                Proprietor
              </div>
              <div className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground" data-testid="footer-note">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Ravi Gupta
              </div>
              <div className="mt-4">
                <Button
                  asChild
                  variant="outline"
                  className="
                    rounded-xl
                    bg-card/60 border-border/70 backdrop-blur
                    hover:bg-card hover:border-border
                    transition-all duration-300
                  "
                  data-testid="footer-cta"
                >
                  <a href="#contact">Request a callback</a>
                </Button>
              </div>
            </div>
          </div>

          <div
            className="
              mt-10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between
              text-xs text-muted-foreground
            "
            data-testid="footer-bottom"
          >
            <div>© {new Date().getFullYear()} Om Convassing Agency. All rights reserved.</div>
            <div className="flex items-center gap-2">
              <span className="opacity-70">Designed for clarity.</span>
              <span aria-hidden="true">•</span>
              <span className="opacity-70">Built with discipline.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
