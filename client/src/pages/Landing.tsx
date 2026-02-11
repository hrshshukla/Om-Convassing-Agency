import { Seo } from "@/components/Seo";
import { AnchorNav } from "@/components/AnchorNav";
import { Section } from "@/components/Section";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Faq } from "@/components/Faq";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CategoryCarousel, { CategoryItem } from "../components/CategoryCarousel";

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
    title: "41-Year's of Legacy",
    description:
      "We're known to Satisfactorily cater to the demands of it's Customer base.",
    id: "svc-1",
  },
  {
    icon: <Handshake className="h-5 w-5" />,
    title: "Network-Driven Market Penetration",
    description:
      "Our pan-India agent network gives us unparalleled reach and local market intelligence across diverse geographies, enabling rapid market penetration and customer acquisition.",
    id: "svc-2",
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: "Senior-Level Selling",
    description:
      "A disciplined process with clear stages, probability weighting, and deal notes you can act on.",
    id: "svc-3",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Market intelligence & Aligned Incentives",
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

const cereals: CategoryItem[] = [

  {
    id: "c2",
    label: "Green Millets",
    imgSrc: "/industries/greenmillet.jpg",
  },
  { id: "c3", label: "Chana Dal", imgSrc: "/industries/chana_dal.jpg" },
  { id: "c4", label: "Chickpeas", imgSrc: "/industries/cereals_chickpeas.jpg" },
  {
    id: "c5",
    label: "Wheat Flour",
    imgSrc: "/industries/cereals_wheat_flour.jpg",
  },
  {
    id: "c6",
    label: "Desi Chana",
    imgSrc: "/industries/black_chana.webp",
  },
  {
    id: "c7",
    label: "Yellow Corn Maize",
    imgSrc: "/industries/cereals_yellow_corn.jpg",
  },
  { id: "c8", label: "Wheat", imgSrc: "/industries/cereals_wheat.jpg" },
  {
    id: "c9",
    label: "Sorghum Seeds",
    imgSrc: "/industries/cereals_sorghum.jpg",
  },
  {
    id: "c10",
    label: "1121 Basmati Rice",
    imgSrc: "/industries/cereals_1121_basmati.jpg",
  },
  {
    id: "c11",
    label: "Sona Masoori Rice",
    imgSrc: "/industries/Mansoori_Rice.webp",
  },
  { id: "c12", label: "RI-36 Rice", imgSrc: "/industries/cereals_ri36.jpg" },
];

const oilSeeds: CategoryItem[] = [

  {
    id: "o2",
    label: "Black Mustard",
    imgSrc: "/industries/black_mustard.webp",
  },
  {
    id: "o3",
    label: "Yellow Soyabean",
    imgSrc: "/industries/yellow_soyabean.webp",
  },
  {
    id: "o4",
    label: "Yellow Mustard",
    imgSrc: "/industries/Yellow_Mustard_Seeds.webp",
  },
  {
    id: "o5",
    label: "Sunflower Seeds",
    imgSrc: "/industries/sunflower.webp",
  },
];

const oilSeedCakes: CategoryItem[] = [

  {
    id: "oc2",
    label: "Groundnut Oil Cake",
    imgSrc: "/industries/groundnut_cake.webp",
  },
  {
    id: "oc3",
    label: "Sunflower Oil Cake",
    imgSrc: "/industries/sunflower_oil_cake.webp",
  },
  {
    id: "oc4",
    label: "Cottonseed Meal",
    imgSrc: "/industries/cotton_Seed_meal.webp",
  },
  {
    id: "oc5",
    label: "Linseed Meal",
    imgSrc: "/industries/linseed_meal.webp",
  },
  {
    id: "oc6",
    label: "Mustard Cake",
    imgSrc: "/industries/black_mustard_cake.webp",
  },
  {
    id: "oc7",
    label: "Sesame Seed Meal",
    imgSrc: "/industries/oilcakes_sesame.jpg",
  },
];

const bran: CategoryItem[] = [
  // {
  //   id: "b0",
  //   label: "Nutritional milling byproducts",
  //   imgSrc: "/industries/bran_nutritional_byproducts.jpg",
  // },
  { id: "b1", label: "Rice Bran", imgSrc: "/industries/rice_bran.webp" },
  { id: "b2", label: "Wheat Bran", imgSrc: "/industries/wheat_bran.webp" },
  { id: "b3", label: "Arhar Bran", imgSrc: "/industries/arhar_bran.webp" },
  { id: "b7", label: "Pea Husk", imgSrc: "/industries/pea_bran.webp" },
];

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Seo
        title="Om Canvassing Agency — Trusted representation. Measurable growth."
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
                  41-Year's of Legacy.
                </Badge>

                <h1
                  className="
                    mt-6 text-4xl sm:text-5xl lg:text-6xl
                    leading-[1.02] text-balance
                  "
                  data-testid="hero-title"
                >
                  Om Canvassing Agency
                </h1>

                <p
                  className="
                    mt-5 text-base sm:text-lg lg:text-xl
                    text-muted-foreground leading-relaxed
                  "
                  data-testid="hero-subtitle"
                >
                  B2B Commission Agent & Broker with 40+ years of experience in agricultural commodity trading. We act as the trusted middleman between grain and cattle feed buyers and sellers across India — helping both parties find their best match, negotiate fair prices, and close deals smoothly. Known for consistent execution, transparent reporting, and unmatched trust, we are Satna, Madhya Pradesh's most reliable name in grain and cattle feed brokerage.
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
                      Contact Now
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

                <div
                  className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3"
                  data-testid="hero-metrics"
                >
                  {[
                    {
                      k: "30–90 days",
                      v: "time to first qualified meetings",
                      id: "m1",
                    },
                    {
                      k: "Monthly",
                      v: "structured reporting cadence",
                      id: "m2",
                    },
                    {
                      k: "Outcome-led",
                      v: "commission-aligned incentives",
                      id: "m3",
                    },
                  ].map((m) => (
                    <div
                      key={m.id}
                      className="
                        rounded-2xl border border-border/60 bg-card/55 backdrop-blur
                        p-4 sm:p-5 shadow-sm
                      "
                      data-testid={`hero-metric-${m.id}`}
                    >
                      <div className="text-lg sm:text-xl font-semibold tracking-tight">
                        {m.k}
                      </div>
                      <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
                        {m.v}
                      </div>
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
        eyebrow="About & Products"
        title="B2B Trading & Commission Services."
        description="We combine territory planning, relationship-led outreach, and a comprehensive catalogue of agricultural commodities — designed for manufacturers where quality and trust win deals."
        data-testid="section-about"
      >
        <div className="grid gap-6 lg:grid-cols-3 mb-16">
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
                  Clarity. Consistency. Accountability. You’ll never wonder
                  where a deal stands — or what we’re doing to move it forward.
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
              <div className="mt-3 text-2xl leading-tight">
                Defined territory, defined outcomes.
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                We align on the accounts, channels, and monthly activity
                expectations. Then we execute with a repeatable cadence and a
                shared pipeline view.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  { k: "Territory", v: "Region / channel-based", id: "s1" },
                  {
                    k: "Model",
                    v: "Commission + aligned incentives",
                    id: "s2",
                  },
                  {
                    k: "Cadence",
                    v: "Weekly activity, monthly review",
                    id: "s3",
                  },
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
        <CategoryCarousel title="Cereals" detail="Primary grains and pulses" items={cereals} />

        <div className="h-6" />
        <CategoryCarousel title="Oil Seeds" detail="High-yield oil crops" items={oilSeeds} />
      
        <div className="h-6" /> 
        <CategoryCarousel
          title="Oil Seed Cakes"
          detail="Premium extraction meals"
          items={oilSeedCakes}
        />
        {/* Bran */}
        <div className="h-6" />
        <CategoryCarousel title="Bran" detail="Nutritional milling byproducts" items={bran}/>
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
                    <div className="text-lg font-semibold tracking-tight">
                      {w.title}
                    </div>
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
                  Our operating model is simple: fewer clients, deeper focus,
                  and measurable execution. We’d rather win the right deals than
                  chase the wrong ones.
                </p>

                <div className="mt-7 grid gap-3">
                  {[
                    {
                      label: "Account plans",
                      value: "Built + maintained",
                      icon: <Target className="h-4.5 w-4.5" />,
                    },
                    {
                      label: "Meeting quality",
                      value: "Qualified + documented",
                      icon: <Handshake className="h-4.5 w-4.5" />,
                    },
                    {
                      label: "Visibility",
                      value: "Pipeline + next steps",
                      icon: <BarChart3 className="h-4.5 w-4.5" />,
                    },
                    {
                      label: "Integrity",
                      value: "Brand-safe execution",
                      icon: <ShieldCheck className="h-4.5 w-4.5" />,
                    },
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
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        {row.value}
                      </div>
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
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </div>
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
              Share your territory and product. We’ll respond with next steps
              and a suggested 30-day plan.
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
      <footer
        className="border-t border-border/60 bg-background"
        data-testid="site-footer"
      >
        <div className="container-pad py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="font-display text-lg" data-testid="footer-brand">
                Om Convassing Agency
              </div>
              <p
                className="mt-2 text-sm text-muted-foreground leading-relaxed"
                data-testid="footer-blurb"
              >
                Premium representation for manufacturers and B2B providers — led
                by Ravi Gupta and B.L. Gupta in Satna.
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
              <div
                className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground"
                data-testid="footer-note"
              >
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
                  <a href="#contact">Contact Us</a>
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
            <div>
              © {new Date().getFullYear()} Om Convassing Agency. All rights
              reserved.
            </div>
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
