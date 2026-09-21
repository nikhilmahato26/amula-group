export interface JobCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  isPopular?: boolean;
}

export const JOB_CATEGORIES: JobCategory[] = [
  {
    id: "it-technology",
    title: "IT & Technology",
    description: "Software engineering, cloud, cybersecurity, technical support & IT administration.",
    iconName: "Laptop",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Nursing, medical staff, lab technicians, clinic support & wellness services.",
    iconName: "Stethoscope",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
  },
  {
    id: "engineering",
    title: "Engineering",
    description: "Civil, mechanical, electrical, site supervisors, and technical specialists.",
    iconName: "Cpu",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description: "Hotels, restaurants, catering, guest relations, front office, and culinary staff.",
    iconName: "Utensils",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sales-marketing",
    title: "Sales & Marketing",
    description: "Business development, digital marketing, retail sales, and brand communication.",
    iconName: "TrendingUp",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "finance-accounting",
    title: "Finance & Accounting",
    description: "Accountants, audit associates, billing executives, and financial analysts.",
    iconName: "CreditCard",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "administration",
    title: "Administration",
    description: "Office managers, HR executives, executive assistants, and operational coordinators.",
    iconName: "Building2",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "skilled-jobs",
    title: "Skilled Jobs",
    description: "Electricians, technicians, heavy equipment operators, welders, and artisans.",
    iconName: "Wrench",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
  },
  {
    id: "driving-transport",
    title: "Driving & Transport",
    description: "Car drivers, bike delivery riders, company chauffeurs, and domestic house drivers.",
    iconName: "Briefcase",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
  },
  {
    id: "overseas-jobs",
    title: "Overseas Jobs",
    description: "International job openings across the Gulf, Middle East, and global markets.",
    iconName: "Globe2",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
  },
  {
    id: "other-opportunities",
    title: "Other Opportunities",
    description: "Diverse emerging roles across supply chain, customer service, and logistics.",
    iconName: "Briefcase",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
];
