import type { EventPlanningStep, EventSetting, EventType, ImageAsset } from "@/types/content";

export const eventsHero: ImageAsset = {
  src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1600&q=85",
  alt: "Outdoor celebration tables under decorative lights, an inspiration image for the concept",
};
export const eventTypes: EventType[] = [
  { id: "birthday", label: "Birthday" }, { id: "reunion", label: "Reunion" },
  { id: "wedding", label: "Intimate wedding" }, { id: "school", label: "School gathering" },
  { id: "company", label: "Company gathering" }, { id: "milestone", label: "Milestone celebration" },
];
export const eventSettings: EventSetting[] = [
  { id: "garden", name: "A garden gathering", description: "An imagined open-air setting for shared stories, a birthday toast, or a simple ceremony.", planningNote: "Discuss weather alternatives, accessible routes, and the layout before choosing an outdoor setting.", image: eventsHero },
  { id: "indoor", name: "An indoor get-together", description: "A conceptual sheltered space for a family meal, reunion, or group program.", planningNote: "Confirm the actual room, layout, accessibility, and suitable guest count with an authorized venue representative.", image: { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85", alt: "Tables in a warmly lit event room, shown as venue inspiration only" } },
];
export const eventPlanningSteps: EventPlanningStep[] = [
  { title: "Occasion", description: "Start with the reason everyone is coming together and the mood you have in mind." },
  { title: "Preferred date", description: "Choose a date for the demo brief. This does not check availability or hold a date." },
  { title: "Estimated guests", description: "Include children in your estimate. This is a planning input, not a venue capacity." },
  { title: "Setting preference", description: "Picture an outdoor or sheltered gathering; add your preference to the message." },
  { title: "Food option", description: "Consider a shared meal or light refreshments. Menu ideas are illustrative, not confirmed catering." },
  { title: "Optional enhancements", description: "Note ideas such as decorations or an overnight stay. No enhancement or service is included or promised." },
];
