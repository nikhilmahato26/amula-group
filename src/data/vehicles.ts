export interface Vehicle {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  badge?: string;
}

export const VEHICLES: Vehicle[] = [
  {
    id: "baleno",
    name: "Baleno",
    category: "Hatchback",
    tagline: "Modern hatchback suitable for everyday travel.",
    description: "Modern hatchback suitable for everyday travel. Ideal for city commutes, quick trips, and comfortable personal rides.",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80",
    badge: "Popular Choice"
  },
  {
    id: "ertiga",
    name: "Ertiga",
    category: "Spacious Multi-Utility",
    tagline: "Spacious vehicle suitable for family and group travel.",
    description: "Spacious vehicle suitable for family and group travel. Enjoy relaxed seating, generous luggage room, and smooth outstation journeys.",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
    badge: "Family Favorite"
  },
  {
    id: "thofan",
    name: "Thofan",
    category: "Travel & Cruiser",
    tagline: "Dependable vehicle for group journeys and outstation travel.",
    description: "Sturdy and dependable vehicle suitable for group journeys, pilgrimage tours, and long-distance outstation travel.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80",
    badge: "Group Travel"
  },
  {
    id: "innova",
    name: "Innova",
    category: "Premium MPV",
    tagline: "Comfortable vehicle for family and outstation travel.",
    description: "Comfortable vehicle for family and outstation travel. Known for superior ride comfort, refined executive travel, and highway endurance.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
    badge: "Premium Comfort"
  },
  {
    id: "thar",
    name: "Thar",
    category: "Premium 4x4 SUV",
    tagline: "SUV suitable for premium and leisure travel.",
    description: "SUV suitable for premium and leisure travel. Command the road with bold style, rugged versatility, and distinctive appeal.",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80",
    badge: "Leisure & Adventure"
  },
  {
    id: "brezza",
    name: "Brezza",
    category: "Compact SUV",
    tagline: "Compact SUV suitable for city and travel requirements.",
    description: "Compact SUV suitable for city and travel requirements. Delivers elevated driving views, agile handling, and effortless city and highway transit.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80",
    badge: "Versatile SUV"
  }
];
