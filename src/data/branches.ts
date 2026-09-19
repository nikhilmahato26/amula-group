export interface Branch {
  id: string;
  name: string;
  city: string;
  region: string;
  addressLines: string[];
  isInternational?: boolean;
  isComingSoon?: boolean;
  badge?: string;
  mapQuery: string;
  phone?: string;
}

export const BRANCHES: Branch[] = [
  {
    id: "dubai",
    name: "Dubai Branch",
    city: "Dubai",
    region: "UAE",
    isInternational: true,
    badge: "International Office",
    addressLines: [
      "Dubai Salauddin Metro Station",
      "Exit 2, Prime Medical Building",
      "5th Floor, Dubai, UAE"
    ],
    mapQuery: "Dubai Salauddin Metro Station Exit 2 Prime Medical Building Dubai UAE",
    phone: "8858887789"
  },
  {
    id: "hyderabad",
    name: "Hyderabad Branch",
    city: "Hyderabad",
    region: "Telangana, India",
    badge: "Regional Hub",
    addressLines: [
      "Ameerpet",
      "Hyderabad, Telangana"
    ],
    mapQuery: "Ameerpet Hyderabad Telangana",
    phone: "8858887789"
  },
  {
    id: "nizamabad",
    name: "Nizamabad Branch",
    city: "Nizamabad",
    region: "Telangana, India",
    addressLines: [
      "Vinayak Nagar",
      "Next to Bajaj Electronics",
      "Nizamabad, Telangana"
    ],
    mapQuery: "Vinayak Nagar Next to Bajaj Electronics Nizamabad Telangana",
    phone: "9908225057"
  },
  {
    id: "basar",
    name: "Basar Branch",
    city: "Basar",
    region: "Nirmal, Telangana, India",
    addressLines: [
      "Near Bus Stand",
      "Basar, Nirmal District",
      "Telangana"
    ],
    mapQuery: "Basar Bus Stand Nirmal Telangana",
    phone: "8858887789"
  },
  {
    id: "coming-soon",
    name: "Expansion Hubs",
    city: "More Locations",
    region: "Pan India & Middle East",
    isComingSoon: true,
    badge: "Opening Soon",
    addressLines: [
      "Strategic new branches opening soon",
      "Expanding candidate and travel support",
      "Stay tuned for announcements"
    ],
    mapQuery: "India",
  }
];
