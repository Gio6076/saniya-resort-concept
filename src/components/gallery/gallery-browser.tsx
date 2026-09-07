"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { GalleryCategory, GalleryItem } from "@/types/content";

export function GalleryBrowser({ items, categories }: { items: GalleryItem[]; categories: readonly GalleryCategory[] }) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const reduceMotion = useReducedMotion();
  const visibleItems = activeCategory === "All" ? items : items.filter(item => item.category === activeCategory);

  return <div className="mt-10">
    <div className="flex gap-2 overflow-x-auto pb-3" role="tablist" aria-label="Gallery categories">
      {categories.map(category => {
        const active = category === activeCategory;
        const count = category === "All" ? items.length : items.filter(item => item.category === category).length;
        return <button key={category} type="button" role="tab" aria-selected={active} className={`min-h-11 shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition ${active ? "border-brand bg-brand text-white" : "border-ink/15 bg-surface text-ink hover:border-brand hover:text-brand"}`} onClick={() => setActiveCategory(category)}>{category}<span className="ml-2 text-xs opacity-65">{count}</span></button>;
      })}
    </div>

    {visibleItems.length ? <div className="mt-8 grid auto-rows-[8rem] grid-cols-2 gap-3 sm:auto-rows-[10rem] sm:gap-5 md:grid-cols-4 lg:auto-rows-[11rem]">
      {visibleItems.map((item, index) => <motion.figure key={item.id} layout initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .35, delay: reduceMotion ? 0 : index * .035 }} className={`group relative overflow-hidden rounded-[1.5rem] bg-surface shadow-[var(--shadow-card)] ${index === 0 ? "col-span-2 row-span-2" : index === 1 ? "row-span-2" : index === 4 ? "col-span-2" : ""}`}>
        <Image src={item.src} alt={item.alt} fill sizes="(max-width:640px) 50vw, (max-width:1024px) 25vw, 20vw" className="object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent p-4 pt-12 text-white"><figcaption className="font-display text-xl font-semibold">{item.label}</figcaption><p className="mt-1 text-xs leading-5 text-white/75">{item.description}</p></div>
      </motion.figure>)}
    </div> : <div className="mt-8 rounded-[1.75rem] border border-dashed border-ink/20 bg-surface p-10 text-center" role="status"><h3 className="font-display text-2xl">No images in this chapter yet.</h3><p className="mx-auto mt-3 max-w-md leading-7 text-muted">Approved resort photography for this category will be added when available. Try another category to keep exploring the concept.</p></div>}
  </div>;
}
