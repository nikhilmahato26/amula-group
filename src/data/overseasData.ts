export interface OverseasCountry {
  id: string;
  name: string;
  region: string;
  flag: string;
  image: string;
  description: string;
  popularRoles: string[];
}

export interface OverseasPosition {
  id: string;
  title: string;
  originalFlyerTitle: string;
  category: string;
  image: string;
  description: string;
  keySkills: string[];
  destinations: string[];
}

export const OVERSEAS_PROMISE = {
  teluguHeadline: "Amula Group నుండి సురక్షితంగా విదేశాలకు వెళ్ళే వారికి ఎలాంటి Advance Payment లేకుండా పంపించబడును.",
  englishHeadline: "Safe Overseas Employment Assistance with Zero Advance Payment",
  subtext: "Amula Group assists aspiring candidates to work abroad across the Gulf, Europe, and international destinations with 100% transparent procedures and no advance payment.",
  phones: ["+91 99122 25057", "+91 90594 05057"],
  whatsappChannel: "AMULA GROUP CONSULTANCY",
  instagramHandle: "@AMULA.GROUP.CONSULTANCY",
};

export const OVERSEAS_COUNTRIES: OverseasCountry[] = [
  {
    id: "dubai",
    name: "Dubai (UAE)",
    region: "Middle East / Gulf",
    flag: "🇦🇪",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    description: "Hub for commercial driving, hospitality, technical trades, construction, and corporate services.",
    popularRoles: ["Company Driver", "Electrician", "Hotel Staff", "Bike Rider"],
  },
  {
    id: "qatar",
    name: "Qatar",
    region: "Middle East / Gulf",
    flag: "🇶🇦",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=800&q=80",
    description: "Rapidly expanding infrastructure, logistics, delivery networks, and restaurant sector openings.",
    popularRoles: ["Bike Delivery Rider", "Plumber", "Car Driver", "Restaurant Jobs"],
  },
  {
    id: "saudi",
    name: "Saudi Arabia",
    region: "Middle East / Gulf",
    flag: "🇸🇦",
    image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=800&q=80",
    description: "High demand for private house drivers, commercial fleet drivers, electricians, and facility maintenance.",
    popularRoles: ["House Driver", "Car Driver", "Electrician", "Plumber"],
  },
  {
    id: "kuwait",
    name: "Kuwait",
    region: "Middle East / Gulf",
    flag: "🇰🇼",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kuwait_Towers2025.jpg/1280px-Kuwait_Towers2025.jpg",
    description: "Established demand for domestic chauffeurs, technicians, restaurant staff, and hospitality personnel.",
    popularRoles: ["House Driver", "Plumber", "Electrician", "Restaurant Jobs"],
  },
  {
    id: "bahrain",
    name: "Bahrain",
    region: "Middle East / Gulf",
    flag: "🇧🇭",
    image: "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80",
    description: "Thriving hospitality, financial services transport, facilities maintenance, and commercial driving.",
    popularRoles: ["Company Driver", "Hotel Management", "Electrician"],
  },
  {
    id: "oman",
    name: "Oman",
    region: "Middle East / Gulf",
    flag: "🇴🇲",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Muscat%2C_moschea_del_sultano_qaboos%2C_esterno_01.jpg",
    description: "Opportunities across MEP technical trades, plumbing, transport logistics, and dining services.",
    popularRoles: ["Plumber", "Electrician", "Car Driver", "Restaurant Jobs"],
  },
  {
    id: "maldives",
    name: "Maldives",
    region: "South Asia / Indian Ocean",
    flag: "🇲🇻",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    description: "World-class luxury resorts, island hotels, culinary operations, and guest hospitality services.",
    popularRoles: ["Hotel Management Jobs", "Restaurant Jobs", "Facility Maintenance"],
  },
  {
    id: "russia",
    name: "Russia",
    region: "Eastern Europe / Northern Asia",
    flag: "🇷🇺",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/St._Basil%27s_Cathedral%2C_Red_Square.jpg",
    description: "Industrial projects, logistics, technical trades, and commercial vehicle operations.",
    popularRoles: ["Electrician", "Plumber", "Commercial Driver"],
  },
  {
    id: "ukraine",
    name: "Ukraine",
    region: "Eastern Europe",
    flag: "🇺🇦",
    image: "https://images.unsplash.com/photo-1561542320-9a18cd340469?auto=format&fit=crop&w=800&q=80",
    description: "Logistics, trade operations, facilities support, and transport management.",
    popularRoles: ["Driver", "Technician", "Maintenance Staff"],
  },
  {
    id: "moldova",
    name: "Moldova",
    region: "Eastern Europe",
    flag: "🇲🇩",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Catedral_de_la_Natividad%2C_Chisin%C3%A1u%2C_Moldavia%2C_2023-11-03%2C_DD_36-38_HDR.jpg/1280px-Catedral_de_la_Natividad%2C_Chisin%C3%A1u%2C_Moldavia%2C_2023-11-03%2C_DD_36-38_HDR.jpg",
    description: "European work opportunities in transport, culinary service, and trade craftsmanship.",
    popularRoles: ["Car Driver", "Restaurant Jobs", "Electrician"],
  },
  {
    id: "malta",
    name: "Malta",
    region: "Southern Europe / Mediterranean",
    flag: "🇲🇹",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    description: "Mediterranean European hub with strong demand for hospitality, food service, and riders.",
    popularRoles: ["Hotel Management", "Restaurant Jobs", "Bike Rider"],
  },
  {
    id: "germany",
    name: "Germany",
    region: "Central Europe",
    flag: "🇩🇪",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    description: "High-standard European opportunities for certified electricians, plumbers, and hospitality pros.",
    popularRoles: ["Electrician", "Plumber", "Hotel Management"],
  },
  {
    id: "israel",
    name: "Israel",
    region: "Middle East",
    flag: "🇮🇱",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Skyline_of_Tel_Aviv_%2834324506705%29.jpg",
    description: "Construction, skilled technical trades, caregiving, and transport logistics.",
    popularRoles: ["Electrician", "Plumber", "House Driver"],
  },
  {
    id: "france",
    name: "France",
    region: "Western Europe",
    flag: "🇫🇷",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    description: "European culinary, restaurant management, tourism hospitality, and delivery logistics.",
    popularRoles: ["Restaurant Jobs", "Hotel Management", "Car Driver"],
  },
  {
    id: "more-countries",
    name: "& More Global Destinations",
    region: "Worldwide",
    flag: "🌐",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    description: "Continuous partnerships opening new pathways across additional Gulf and European nations.",
    popularRoles: ["All Technical & Service Roles"],
  },
];

export const OVERSEAS_POSITIONS: OverseasPosition[] = [
  {
    id: "electrician",
    title: "Electrician",
    originalFlyerTitle: "Electrition",
    category: "Skilled Technical Trade",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    description: "Installation, maintenance, wiring, and panel repairs for residential, commercial, and industrial facilities.",
    keySkills: ["Wiring & Conduit", "Control Panels", "Circuit Testing", "Safety Compliance"],
    destinations: ["Dubai", "Saudi Arabia", "Qatar", "Kuwait", "Germany"],
  },
  {
    id: "plumber",
    title: "Plumber",
    originalFlyerTitle: "Plumber",
    category: "Skilled Technical Trade",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80",
    description: "Assembly, installation, and repair of pipes, fittings, drainage systems, and water supply fixtures.",
    keySkills: ["Pipe Fitting", "Drainage Systems", "Blueprint Reading", "Leak Diagnosis"],
    destinations: ["Dubai", "Kuwait", "Oman", "Saudi Arabia", "Israel"],
  },
  {
    id: "car-driver",
    title: "Car Driver",
    originalFlyerTitle: "Car Driver",
    category: "Driving & Transport",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    description: "Safe passenger transit, airport transfers, limousine/taxi services, and city navigation.",
    keySkills: ["Valid Driving License", "GPS Navigation", "Passenger Etiquette", "Vehicle Care"],
    destinations: ["Dubai", "Qatar", "Saudi Arabia", "Oman", "Moldova"],
  },
  {
    id: "bike-rider",
    title: "Bike Delivery Rider",
    originalFlyerTitle: "Bike Rider",
    category: "Logistics & Delivery",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    description: "Fast-paced food delivery, parcel dispatch, courier delivery, and customer order handoffs.",
    keySkills: ["Two-Wheeler Riding", "Route Efficiency", "Delivery Apps", "Punctuality"],
    destinations: ["Dubai", "Qatar", "Malta", "Kuwait"],
  },
  {
    id: "company-driver",
    title: "Company Driver",
    originalFlyerTitle: "Company Driver",
    category: "Corporate Transport",
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80",
    description: "Transporting corporate executives, business staff, company shuttles, and material deliveries.",
    keySkills: ["Corporate Protocol", "Van/Bus/Sedan Operation", "Time Management", "Clean Record"],
    destinations: ["Dubai", "Bahrain", "Saudi Arabia", "Qatar"],
  },
  {
    id: "house-driver",
    title: "House Driver",
    originalFlyerTitle: "House Driver",
    category: "Private / Domestic Transport",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    description: "Dedicated personal and family driving for private households, school runs, and family errands.",
    keySkills: ["Discretion & Trust", "Family Safety", "Flexible Hours", "Vehicle Upkeep"],
    destinations: ["Saudi Arabia", "Kuwait", "Dubai", "Oman"],
  },
  {
    id: "hotel-management",
    title: "Hotel Management & Hospitality",
    originalFlyerTitle: "Hotel Managemet Jobs",
    category: "Hospitality & Tourism",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    description: "Front desk operations, housekeeping supervision, guest relations, and resort facility coordination.",
    keySkills: ["Guest Communication", "Hotel Operations", "Reservation Systems", "Team Leadership"],
    destinations: ["Maldives", "Dubai", "Malta", "Bahrain", "France"],
  },
  {
    id: "restaurant-jobs",
    title: "Restaurant & Culinary Jobs",
    originalFlyerTitle: "Restaurant Jobs",
    category: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    description: "Chefs, cooks, kitchen helpers, waiters, stewards, and restaurant service team members.",
    keySkills: ["Food Preparation", "Hygiene Standards", "Customer Service", "Order Taking"],
    destinations: ["Dubai", "Qatar", "France", "Maldives", "Moldova"],
  },
  {
    id: "more-roles",
    title: "& More Overseas Positions",
    originalFlyerTitle: "& More We Will Provided",
    category: "Custom Enquiries",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    description: "Specialized roles across MEP, civil construction, security, warehousing, and healthcare.",
    keySkills: ["Candidate Assessment", "Direct Matching", "Zero Advance Payment"],
    destinations: ["All Listed Countries"],
  },
];
