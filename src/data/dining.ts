import type { DemoMenuItem, DiningExperience, ImageAsset } from "@/types/content";

// All content and photography are illustrative, pending approved business information.
export const diningHero: ImageAsset = {
  src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2000&q=85",
  alt: "An inviting dining room with greenery, used as shared-table inspiration",
};
export const flavorsImage: ImageAsset = {
  src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",
  alt: "Plated food on a restaurant table, illustrative photography rather than the demo menu",
};
export const diningExperiences: DiningExperience[] = [
  { id: "family", title: "Casual family dining", moment: "Everyone around one table", description: "Imagine familiar rice plates and dishes to share, with time to catch up between swims." },
  { id: "poolside", title: "Poolside refreshments", moment: "A little afternoon pause", description: "A concept for cool fruit drinks and easy snacks when the group needs a break from the water." },
  { id: "groups", title: "Group meals & celebrations", moment: "Pass a plate, tell a story", description: "An imagined shared meal that could become part of a reunion, birthday, or gathering plan." },
  { id: "breakfast", title: "Breakfast & stay add-ons", moment: "Start the day together", description: "Explore the idea of adding breakfast to a stay. The booking demo includes an illustrative breakfast option; no meal is reserved." },
];
export const demoMenu: DemoMenuItem[] = [
  { id: "chicken", name: "Calamansi chicken & rice", description: "An imagined citrus-marinated chicken plate with rice and a simple side salad.", demoPrice: 280, serving: "per plate" },
  { id: "vegetables", name: "Garden vegetable noodles", description: "Stir-fried noodles with colorful vegetables, imagined for an easy shared lunch.", demoPrice: 240, serving: "per plate" },
  { id: "fruit", name: "Tropical fruit bowl", description: "A bright mix of seasonal fruit for a sunny afternoon.", demoPrice: 160, serving: "per bowl" },
  { id: "cooler", name: "Mango calamansi cooler", description: "An imagined fruit refresher served over ice.", demoPrice: 120, serving: "per glass" },
];
