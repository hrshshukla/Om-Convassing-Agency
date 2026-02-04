import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Faq({
  items,
  "data-testid": testId,
}: {
  items: { q: string; a: string; id: string }[];
  "data-testid"?: string;
}) {
  return (
    <div
      className="
        rounded-2xl border border-border/60 bg-card/70
        shadow-sm overflow-hidden
      "
      data-testid={testId}
    >
      <Accordion type="single" collapsible className="px-2 sm:px-4">
        {items.map((it) => (
          <AccordionItem key={it.id} value={it.id} className="border-border/60">
            <AccordionTrigger
              className="
                text-left text-sm sm:text-base font-semibold
                hover:no-underline
                py-5
              "
              data-testid={`faq-q-${it.id}`}
            >
              {it.q}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-sm text-muted-foreground leading-relaxed" data-testid={`faq-a-${it.id}`}>
              {it.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
