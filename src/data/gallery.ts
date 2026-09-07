import type { GalleryCategory, GalleryItem } from "@/types/content";

export const galleryCategories: readonly GalleryCategory[] = ["All", "Stay", "Swim", "Dine", "Celebrate", "Resort spaces"];

// Conceptual mood photography only. Replace with approved resort photography before launch.
export const gallery: GalleryItem[] = [
  { id: "g1", category: "Swim", src: "https://images.unsplash.com/photo-1561501878-aabd62634533?auto=format&fit=crop&w=1600&q=85", alt: "Palm-framed tropical swimming pool in afternoon light", label: "Poolside afternoons", description: "A visual direction for easy water days and unhurried time together." },
  { id: "g2", category: "Stay", src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=85", alt: "Comfortable modern hotel room with warm natural light", label: "A place to settle in", description: "Conceptual room styling for restful mornings and shared stays." },
  { id: "g3", category: "Celebrate", src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85", alt: "Warmly lit event venue prepared with tables for a gathering", label: "Gather around", description: "An illustrative celebration mood, not a confirmed resort venue." },
  { id: "g4", category: "Dine", src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85", alt: "Colorful dishes arranged across a shared dining table", label: "Shared-table moments", description: "A conceptual cue for relaxed meals and familiar flavors." },
  { id: "g5", category: "Resort spaces", src: "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1600&q=85", alt: "People gathering beside a sunlit tropical pool", label: "Open-air togetherness", description: "A broad spatial reference for the resort experience concept." },
  { id: "g6", category: "Resort spaces", src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=85", alt: "Inviting open-air dining space with plants and warm wood", label: "A place to linger", description: "Conceptual atmosphere for dining, conversation, and slow afternoons." },
];
