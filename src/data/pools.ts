import type { PoolZone } from "@/types/content";

export const poolHero = { src: "https://images.unsplash.com/photo-1561501878-aabd62634533?auto=format&fit=crop&w=2400&q=88", alt: "Palm-framed resort swimming pool glowing in afternoon light" };

export const poolZones: PoolZone[] = [
  { id: "main-family-pool", name: "Main family pool", type: "Together-time zone", mood: "Lively, open, and easy to share", description: "A conceptual centerpiece for relaxed laps, floaty afternoons, and families who want to stay close to the action.", guidance: "Depths, access, and supervision guidance to be confirmed.", icon: "waves", src: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1600&q=85", alt: "Sunlit resort pool with steps into clear blue water" },
  { id: "splash-area", name: "Children’s splash area", type: "Little ones zone", mood: "Playful, bright, and made for discovery", description: "An illustrative low-key water-play setting for younger guests, with room for grown-ups to stay nearby.", guidance: "Age guidance, water depth, and equipment details to be confirmed.", icon: "baby", src: "https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?auto=format&fit=crop&w=1600&q=85", alt: "Child-friendly shallow pool area with colorful water play" },
  { id: "quiet-swim", name: "Quiet swim zone", type: "Slow-down zone", mood: "Calm, shaded, and unhurried", description: "A conceptual quieter corner for reading poolside, cooling off, and taking a slower turn through the day.", guidance: "Availability, access, and guest age guidance to be confirmed.", icon: "sun", src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=85", alt: "Quiet turquoise pool surrounded by greenery and loungers" },
];

export const poolGallery = [
  { src: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=1600&q=85", alt: "Turquoise pool water with ripples in the sunlight" },
  { src: "https://images.unsplash.com/photo-1561501878-aabd62634533?auto=format&fit=crop&w=1200&q=85", alt: "Loungers beside a tropical pool in warm evening light" },
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85", alt: "Green landscape reflected beside a calm body of water" },
];
