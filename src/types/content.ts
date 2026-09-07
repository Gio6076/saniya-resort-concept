export type ImageAsset = { src: string; alt: string };
export type Accommodation = { id: string; name: string; category: "Room" | "Cottage" | "Villa"; summary: string; capacity: number; beds: string; image: ImageAsset; featured?: boolean };
export type Experience = { id: string; title: string; description: string; image: ImageAsset; tag: string };
export type PackageOffer = { id: string; name: string; description: string; badge: string; inclusions: string[] };
export type GalleryItem = ImageAsset & { id: string; category: "Stay" | "Swim" | "Dine" | "Celebrate" };
