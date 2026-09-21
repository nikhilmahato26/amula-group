export interface JobCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  isPopular?: boolean;
}

export const JOB_CATEGORIES: JobCategory[] = [
  {
    id: "it-technology",
    title: "IT & Technology",
    description: "Software engineering, cloud, cybersecurity, technical support & IT administration.",
    iconName: "Laptop",
    isPopular: true,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Nursing, medical staff, lab technicians, clinic support & wellness services.",
    iconName: "Stethoscope",
    isPopular: true,
  },
  {
    id: "engineering",
    title: "Engineering",
    description: "Civil, mechanical, electrical, site supervisors, and technical specialists.",
    iconName: "Cpu",
    isPopular: true,
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description: "Hotels, restaurants, catering, guest relations, front office, and culinary staff.",
    iconName: "Utensils",
  },
  {
    id: "sales-marketing",
    title: "Sales & Marketing",
    description: "Business development, digital marketing, retail sales, and brand communication.",
    iconName: "TrendingUp",
  },
  {
    id: "finance-accounting",
    title: "Finance & Accounting",
    description: "Accountants, audit associates, billing executives, and financial analysts.",
    iconName: "CreditCard",
  },
  {
    id: "administration",
    title: "Administration",
    description: "Office managers, HR executives, executive assistants, and operational coordinators.",
    iconName: "Building2",
  },
  {
    id: "skilled-jobs",
    title: "Skilled Jobs",
    description: "Electricians, technicians, heavy equipment operators, welders, and artisans.",
    iconName: "Wrench",
    isPopular: true,
  },
  {
    id: "driving-transport",
    title: "Driving & Transport",
    description: "Car drivers, bike delivery riders, company chauffeurs, and domestic house drivers.",
    iconName: "Briefcase",
    isPopular: true,
  },
  {
    id: "overseas-jobs",
    title: "Overseas Jobs",
    description: "International job openings across the Gulf, Middle East, and global markets.",
    iconName: "Globe2",
    isPopular: true,
  },
  {
    id: "other-opportunities",
    title: "Other Opportunities",
    description: "Diverse emerging roles across supply chain, customer service, and logistics.",
    iconName: "Briefcase",
  },
];
