export const COMPANY_INFO = {
  name: "AMULA GROUP",
  legalName: "AMULA GROUP TOURS AND TRAVEL & JOB CONSULTANCY",
  tagline: "Tours • Travel • Job Consultancy • Car Rental",
  primaryPhone: "8858887789",
  secondaryPhone: "9908225057",
  whatsappNumber: "8858887789",
  whatsappFormatted: "+91 8858887789",
  email: "amulagroup.ceo.ram@gmail.com",
  year: 2026,
};

export interface NavItem {
  label: string;
  href: string;
  isSpecial?: boolean;
}

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Job Consultancy", href: "/job-consultancy" },
  { label: "Jobs", href: "/jobs" },
  { label: "About Us", href: "/about" },
  { label: "Our Branches", href: "/branches" },
  { label: "Tours & Travel", href: "/travel" },
  { label: "Car Rental", href: "/car-rental" },
  { label: "Contact", href: "/contact" },
];
