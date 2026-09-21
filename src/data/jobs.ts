export interface JobListing {
  id: string;
  title: string;
  category: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  isInternational?: boolean;
  postedDate: string;
}

export const SAMPLE_JOBS: JobListing[] = [
  {
    id: "job-1",
    title: "Senior Full-Stack Developer",
    category: "IT & Technology",
    location: "Hyderabad, India",
    type: "Full-Time",
    experience: "3-6 Years",
    description: "Seeking a passionate developer proficient in React, Node.js, and cloud deployments to build scalable digital products.",
    requirements: [
      "Solid experience with React and TypeScript",
      "Backend proficiency in Node.js or Python",
      "Familiarity with RESTful APIs & database design"
    ],
    postedDate: "Recent"
  },
  {
    id: "job-2",
    title: "Hospital Staff Nurse (Registered)",
    category: "Healthcare",
    location: "Dubai, UAE",
    type: "Full-Time",
    experience: "2-5 Years",
    isInternational: true,
    description: "Hospitality and healthcare opportunities for registered nurses in premier healthcare centers in Dubai.",
    requirements: [
      "B.Sc Nursing / Diploma in General Nursing",
      "Active nursing license (DHA license or eligibility letter preferred)",
      "Strong patient care and clinical communication skills"
    ],
    postedDate: "Recent"
  },
  {
    id: "job-3",
    title: "Civil Site Engineer",
    category: "Engineering",
    location: "Hyderabad / Nizamabad",
    type: "Full-Time",
    experience: "2-4 Years",
    description: "Oversee site operations, quality inspections, subcontractor coordination, and project timelines for commercial builds.",
    requirements: [
      "B.Tech / Diploma in Civil Engineering",
      "Knowledge of AutoCAD and structural site management",
      "Ability to handle material tracking and reporting"
    ],
    postedDate: "Recent"
  },
  {
    id: "job-4",
    title: "Hotel Front Office Executive",
    category: "Hospitality",
    location: "Dubai, UAE",
    type: "Full-Time",
    experience: "1-3 Years",
    isInternational: true,
    description: "Dynamic front office professional for guest reception, reservations, and customer delight at star-rated hospitality venues.",
    requirements: [
      "Degree or Diploma in Hotel Management",
      "Fluent English communication skills; Arabic is a plus",
      "Customer-centric mindset and polished demeanor"
    ],
    postedDate: "Recent"
  },
  {
    id: "job-5",
    title: "Business Development Executive",
    category: "Sales & Marketing",
    location: "Hyderabad, India",
    type: "Full-Time",
    experience: "1-3 Years",
    description: "Drive client acquisition, client relationship management, and sales demonstrations across target industry verticals.",
    requirements: [
      "Excellent communication and presentation skills",
      "Proactive attitude toward lead generation and client visits",
      "Experience in B2B or B2C sales"
    ],
    postedDate: "Recent"
  },
  {
    id: "job-6",
    title: "Senior Accountant & GST Specialist",
    category: "Finance & Accounting",
    location: "Nizamabad, Telangana",
    type: "Full-Time",
    experience: "3-5 Years",
    description: "Manage accounts finalization, GST returns, TDS reconciliations, and financial reporting.",
    requirements: [
      "B.Com / M.Com / Semi-qualified CA",
      "Hands-on proficiency in Tally Prime and Excel",
      "Sound knowledge of Indian statutory taxation"
    ],
    postedDate: "Recent"
  },
  {
    id: "job-7",
    title: "Electrical Maintenance Technician",
    category: "Skilled Jobs",
    location: "Dubai, UAE",
    type: "Full-Time",
    experience: "2-5 Years",
    isInternational: true,
    description: "Electrical installation, routine maintenance, and fault diagnosis for commercial and residential facilities in the UAE.",
    requirements: [
      "ITI / Diploma in Electrical Engineering",
      "Hands-on experience in control panels and wiring",
      "Safety protocol compliance and troubleshooting abilities"
    ],
    postedDate: "Recent"
  },
  {
    id: "job-8",
    title: "Office Administrator & Coordinator",
    category: "Administration",
    location: "Basar / Nirmal",
    type: "Full-Time",
    experience: "1-3 Years",
    description: "Manage front-desk operations, candidate documentation, filing, and team scheduling at our Basar branch.",
    requirements: [
      "Graduate in any discipline",
      "Proficiency in MS Office Suite",
      "Good organizational and multitasking skills"
    ],
    postedDate: "Recent"
  },
  {
    id: "job-9",
    title: "Logistics & Fleet Coordinator",
    category: "Other Opportunities",
    location: "Hyderabad, India",
    type: "Full-Time",
    experience: "2-4 Years",
    description: "Coordinate vehicle dispatching, customer scheduling, driver allocations, and fleet maintenance records.",
    requirements: [
      "Strong coordination and problem-solving skills",
      "Familiarity with Hyderabad and Telangana routes",
      "Fluency in Telugu, Hindi, and basic English"
    ],
    postedDate: "Recent"
  },
  {
    id: "job-10",
    title: "Overseas Electrician (Commercial & Residential)",
    category: "Skilled Jobs",
    location: "Dubai, UAE",
    type: "Full-Time",
    experience: "1-4 Years",
    isInternational: true,
    description: "Electrical installations, conduit wiring, distribution boards, and routine site maintenance. Zero advance payment required.",
    requirements: [
      "ITI / Diploma in Electrical Trade or equivalent experience",
      "Knowledge of electrical wiring, circuit testing, and safety protocols",
      "Passport ready with international travel clearance"
    ],
    postedDate: "Recent"
  },
  {
    id: "job-11",
    title: "Plumber & Sanitary Specialist",
    category: "Skilled Jobs",
    location: "Kuwait / Qatar",
    type: "Full-Time",
    experience: "1-3 Years",
    isInternational: true,
    description: "Installation and repair of plumbing fixtures, water supply piping, drainage systems, and maintenance for building complexes.",
    requirements: [
      "Proven plumbing craftsmanship and tool handling",
      "Pipe fitting, leakage testing, and drainage layout knowledge",
      "Hardworking and safety-conscious attitude"
    ],
    postedDate: "Recent"
  },
  {
    id: "job-12",
    title: "Light Vehicle Car Driver / Chauffeur",
    category: "Driving & Transport",
    location: "Dubai, UAE",
    type: "Full-Time",
    experience: "2-5 Years",
    isInternational: true,
    description: "Chauffeur and car driving for passenger transit, airport pick-ups, and corporate guest mobility. Clean driving record required.",
    requirements: [
      "Valid Indian or GCC Driving License (LMV)",
      "Good road sense, punctuality, and basic GPS navigation skills",
      "Polite customer handling and vehicle maintenance awareness"
    ],
    postedDate: "Recent"
  },
  {
    id: "job-13",
    title: "Bike Delivery Rider",
    category: "Driving & Transport",
    location: "Qatar / Dubai",
    type: "Full-Time",
    experience: "1-3 Years",
    isInternational: true,
    description: "Fast-paced food delivery and courier dispatch using company two-wheelers. Dynamic route management with competitive incentives.",
    requirements: [
      "Valid two-wheeler driving license",
      "Smartphone familiarity for delivery app navigation",
      "Punctual and customer-friendly demeanor"
    ],
    postedDate: "Recent"
  },
  {
    id: "job-14",
    title: "Company Executive Driver",
    category: "Driving & Transport",
    location: "Bahrain / Saudi Arabia",
    type: "Full-Time",
    experience: "2-4 Years",
    isInternational: true,
    description: "Corporate chauffeur driving company vans, sedans, and staff shuttles with high standards of punctuality and road safety.",
    requirements: [
      "Valid driving license with verified commercial experience",
      "Basic English or Hindi communication",
      "Professional corporate etiquette"
    ],
    postedDate: "Recent"
  },
  {
    id: "job-15",
    title: "House Driver (Private Household)",
    category: "Driving & Transport",
    location: "Saudi Arabia / Kuwait",
    type: "Full-Time",
    experience: "2-5 Years",
    isInternational: true,
    description: "Personal and family chauffeur for private residence. Responsible for family transit, school errands, and vehicle upkeep.",
    requirements: [
      "Valid Indian or GCC driving license",
      "Trustworthy, disciplined, and patient temperament",
      "Clean background check and valid passport"
    ],
    postedDate: "Recent"
  },
  {
    id: "job-16",
    title: "Hotel Management & Front Office Staff",
    category: "Hospitality",
    location: "Maldives / Malta",
    type: "Full-Time",
    experience: "1-4 Years",
    isInternational: true,
    description: "Front desk reception, guest welcoming, concierge services, and resort management for luxury hospitality properties.",
    requirements: [
      "Diploma or Degree in Hotel Management / Hospitality",
      "Good conversational English skills",
      "Pleasing personality and guest-first mindset"
    ],
    postedDate: "Recent"
  },
  {
    id: "job-17",
    title: "Restaurant Chef, Cook & Service Staff",
    category: "Hospitality",
    location: "Germany / France / Dubai",
    type: "Full-Time",
    experience: "1-3 Years",
    isInternational: true,
    description: "Culinary preparation, kitchen assistance, and restaurant dining service across high-traffic dining establishments.",
    requirements: [
      "Experience in commercial kitchen operations or food service",
      "Knowledge of kitchen hygiene and food safety standards",
      "Team player with high energy during peak service hours"
    ],
    postedDate: "Recent"
  }
];

