import type { Accommodation, Experience, GalleryItem, PackageOffer } from "@/types/content";
export const heroImage={src:"https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=2400&q=88",alt:"Tropical swimming pool surrounded by palms and resort buildings"};
export const accommodations:Accommodation[]=[
{id:"garden-family-room",name:"Garden Family Room",category:"Room",summary:"A breezy, comfortable base designed for unhurried family stays.",capacity:4,beds:"2 double beds",image:{src:"https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=85",alt:"Warm modern guest room with two beds"},featured:true},
{id:"poolside-cottage",name:"Poolside Cottage",category:"Cottage",summary:"An easygoing hideaway close to the water and shared resort spaces.",capacity:6,beds:"Flexible group setup",image:{src:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85",alt:"Bright resort room opening toward tropical greenery"},featured:true},
{id:"celebration-villa",name:"Celebration Villa",category:"Villa",summary:"Extra room for reunions, milestone weekends, and shared memories.",capacity:10,beds:"Multi-room layout",image:{src:"https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1400&q=85",alt:"Spacious tropical villa beside a swimming pool"},featured:true}];
export const experiences:Experience[]=[
{id:"family-pools",title:"Make a splash",description:"Spaces for energetic play, slow swims, and sunny afternoons together.",tag:"Pools",image:{src:"https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85",alt:"Family-friendly swimming pool under a blue sky"}},
{id:"shared-meals",title:"Gather around the table",description:"A relaxed dining concept built around familiar flavors and good company.",tag:"Dining",image:{src:"https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=85",alt:"Inviting restaurant dining space with greenery"}},
{id:"celebrations",title:"Celebrate your way",description:"Flexible settings for birthdays, reunions, weddings, and meaningful days.",tag:"Events",image:{src:"https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1600&q=85",alt:"Outdoor celebration tables decorated with lights"}}];
export const packages:PackageOffer[]=[
{id:"family-day-out",name:"Family Day Out",badge:"Day-use concept",description:"A simple bundle for families who want more time for swimming and sharing meals.",inclusions:["Pool access","Reserved home base","Dining credit placeholder"]},
{id:"stay-and-celebrate",name:"Stay & Celebrate",badge:"Group concept",description:"A flexible starting point for small milestones and relaxed overnight gatherings.",inclusions:["Overnight stay","Celebration setup","Breakfast placeholder"]}];
export const gallery:GalleryItem[]=[
{id:"g1",category:"Swim",src:"https://images.unsplash.com/photo-1561501878-aabd62634533?auto=format&fit=crop&w=1200&q=85",alt:"Palm-framed tropical resort pool"},
{id:"g2",category:"Stay",src:"https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85",alt:"Comfortable modern hotel room"},
{id:"g3",category:"Celebrate",src:"https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",alt:"Warmly lit event venue prepared for guests"},
{id:"g4",category:"Dine",src:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",alt:"Colorful dishes arranged on a dining table"}];
export const bookingOptions={guestLimits:{adults:12,children:8},addOns:["Breakfast","Celebration setup","Extra bedding","Late checkout request"]} as const;
