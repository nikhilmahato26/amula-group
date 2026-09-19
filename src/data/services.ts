export interface ConsultancyService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  points: string[];
}

export const CONSULTANCY_SERVICES: ConsultancyService[] = [
  {
    id: "placement-assistance",
    title: "Job Placement Assistance",
    description: "Support candidates in exploring suitable employment opportunities across diverse industry verticals.",
    iconName: "Briefcase",
    points: [
      "Profile evaluation and matching",
      "Coordination with prospective hiring organizations",
      "Support across diverse industry sectors"
    ]
  },
  {
    id: "career-guidance",
    title: "Career Guidance",
    description: "Help candidates understand available career paths, skill alignments, and growth opportunities.",
    iconName: "Compass",
    points: [
      "Skill assessment & pathway mapping",
      "Industry trend insights and advisory",
      "Goal setting for emerging professionals"
    ]
  },
  {
    id: "search-assistance",
    title: "Job Search Assistance",
    description: "Assist candidates in identifying relevant job opportunities aligned precisely with their experience and profile.",
    iconName: "Search",
    points: [
      "Customized opportunity filtering",
      "Resume presentation guidance",
      "Targeted role exploration"
    ]
  },
  {
    id: "candidate-support",
    title: "Candidate Support",
    description: "Provide active communication and enquiry support throughout the application and evaluation process.",
    iconName: "Headphones",
    points: [
      "Dedicated assistance via phone & WhatsApp",
      "Timely application follow-ups",
      "Clear guidance at every stage"
    ]
  },
  {
    id: "international-consultancy",
    title: "International Job Consultancy",
    description: "Dedicated support for candidates seeking international employment opportunities, notably in the UAE and Gulf region.",
    iconName: "Globe2",
    points: [
      "Dubai branch on-ground coordination",
      "Overseas employer communication",
      "Documentation advisory support"
    ]
  }
];

export interface CarRentalService {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const CAR_RENTAL_SERVICES: CarRentalService[] = [
  {
    id: "local-rental",
    title: "Local Car Rental",
    description: "Comfortable city transit, full-day or half-day vehicle options for errands, meetings, and personal travel.",
    iconName: "MapPin"
  },
  {
    id: "outstation-rental",
    title: "Outstation Car Rental",
    description: "Safe, dependable vehicles for highway travel, inter-city journeys, and multi-day outstation itineraries.",
    iconName: "Compass"
  },
  {
    id: "family-travel",
    title: "Family Travel",
    description: "Spacious vehicles like Ertiga and Innova offering maximum comfort and ample luggage space for the whole family.",
    iconName: "Users"
  },
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    description: "Punctual pick-up and drop-off to and from airports ensuring stress-free, timely flight connections.",
    iconName: "Plane"
  },
  {
    id: "corporate-travel",
    title: "Corporate Travel",
    description: "Executive vehicle rental for business executives, delegates, corporate meetings, and company staff.",
    iconName: "Building"
  },
  {
    id: "event-transportation",
    title: "Event Transportation",
    description: "Fleet solutions for weddings, celebrations, family functions, and large gathering transportation.",
    iconName: "Calendar"
  },
  {
    id: "tour-travel",
    title: "Tour Travel",
    description: "Dedicated vehicles for sightseeing, pilgrimage routes, weekend getaways, and scenic journeys.",
    iconName: "Mountain"
  },
  {
    id: "custom-booking",
    title: "Custom Vehicle Booking",
    description: "Flexible arrangements tailored to your specific schedule, itinerary, and vehicle preference.",
    iconName: "Settings"
  }
];

export interface TravelService {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const TRAVEL_SERVICES: TravelService[] = [
  {
    id: "tour-packages",
    title: "Tour Packages",
    description: "Carefully planned itineraries for holidays, pilgrimage trips, and regional attractions.",
    iconName: "Map"
  },
  {
    id: "local-travel",
    title: "Local Travel",
    description: "Convenient local transit and city excursions with experienced drivers and clean vehicles.",
    iconName: "Navigation"
  },
  {
    id: "outstation-travel",
    title: "Outstation Travel",
    description: "Long-distance travel solutions across Telangana, Andhra Pradesh, Maharashtra, and beyond.",
    iconName: "Route"
  },
  {
    id: "family-trips",
    title: "Family Trips",
    description: "Comfort-first travel planning ensuring every family member enjoys a relaxed journey.",
    iconName: "Heart"
  },
  {
    id: "group-travel",
    title: "Group Travel",
    description: "High-capacity vehicles such as Thofan and multi-car convoys for group explorations.",
    iconName: "Users"
  },
  {
    id: "corporate-travel-mgmt",
    title: "Corporate Travel",
    description: "Streamlined corporate transit coordination for team offsites, meetings, and business trips.",
    iconName: "Briefcase"
  },
  {
    id: "customized-travel",
    title: "Customized Travel",
    description: "Personalized trip arrangements tailored to your preferred timing, route, and budget.",
    iconName: "Sliders"
  }
];
