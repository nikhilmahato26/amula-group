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
  }
];
