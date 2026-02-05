import React, { useRef } from "react";

export type CategoryItem = {
  id: string;
  label: string;
  imgSrc: string; // public path like "/industries/cereals_wheat.jpg"
};

export default function CategoryCarousel({
  title,
  detail,
  items,
}: {
  title: string;
  detail : string;
  items: CategoryItem[];
  themeColor?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8; // scroll almost full view
    el.scrollBy({
      left: dir === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="my-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-3xl font-semibold text-primary/90">
          {title} : <span className="text-2xl font-thin text-white">{detail}</span>
        </h3>
        <div className="flex gap-2">
          <button
            aria-label={`Prev ${title}`}
            onClick={() => scrollBy("left")}
            className="px-3 py-1 rounded-md border shadow-sm bg-white/8 backdrop-blur hover:scale-95 transition"
          >
            ‹
          </button>
          <button
            aria-label={`Next ${title}`}
            onClick={() => scrollBy("right")}
            className="px-3 py-1 rounded-md border shadow-sm bg-white/8 backdrop-blur hover:scale-95 transition"
          >
            ›
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-2"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {items.map((it) => (
          <article
            key={it.id}
            className="min-w-[220px] max-w-[260px] snap-start bg-white/5 rounded-2xl p-3 flex-shrink-0 shadow-md"
          >
            <div className="w-full h-40 rounded-lg overflow-hidden mb-3 bg-gray-100">
              <img
                src={it.imgSrc}
                alt={it.label}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-lg font-medium">{it.label}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
