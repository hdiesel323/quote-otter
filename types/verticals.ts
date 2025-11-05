// All service verticals QuoteOtter supports

export enum ServiceVertical {
  HomeServices = 'HomeServices',
  Insurance = 'Insurance',
  Moving = 'Moving',
  Legal = 'Legal',
  Financial = 'Financial',
  Auto = 'Auto',
}

export interface ServiceCategory {
  id: string;
  name: string;
  vertical: ServiceVertical;
  icon: string;
  description: string;
  slug: string;
  popular?: boolean;
}

export interface Vertical {
  id: ServiceVertical;
  name: string;
  description: string;
  icon: string;
  color: string;
  categories: ServiceCategory[];
}

// Home Services Categories
export const HOME_SERVICES_CATEGORIES: ServiceCategory[] = [
  { id: 'roofing', name: 'Roofing', vertical: ServiceVertical.HomeServices, icon: 'pi-home', description: 'Roof repair and replacement', slug: 'roofing', popular: true },
  { id: 'hvac', name: 'HVAC', vertical: ServiceVertical.HomeServices, icon: 'pi-sun', description: 'Heating and cooling services', slug: 'hvac', popular: true },
  { id: 'plumbing', name: 'Plumbing', vertical: ServiceVertical.HomeServices, icon: 'pi-wrench', description: 'Plumbing repairs and installation', slug: 'plumbing', popular: true },
  { id: 'electrical', name: 'Electrical', vertical: ServiceVertical.HomeServices, icon: 'pi-bolt', description: 'Electrical repairs and upgrades', slug: 'electrical', popular: true },
  { id: 'cleaning', name: 'Cleaning', vertical: ServiceVertical.HomeServices, icon: 'pi-sparkles', description: 'House cleaning services', slug: 'cleaning' },
  { id: 'painting', name: 'Painting', vertical: ServiceVertical.HomeServices, icon: 'pi-palette', description: 'Interior and exterior painting', slug: 'painting' },
  { id: 'flooring', name: 'Flooring', vertical: ServiceVertical.HomeServices, icon: 'pi-th-large', description: 'Flooring installation and repair', slug: 'flooring' },
  { id: 'landscaping', name: 'Landscaping', vertical: ServiceVertical.HomeServices, icon: 'pi-leaf', description: 'Lawn care and landscaping', slug: 'landscaping' },
  { id: 'remodeling', name: 'Remodeling', vertical: ServiceVertical.HomeServices, icon: 'pi-building', description: 'Home remodeling projects', slug: 'remodeling' },
  { id: 'pest-control', name: 'Pest Control', vertical: ServiceVertical.HomeServices, icon: 'pi-shield', description: 'Pest elimination services', slug: 'pest-control' },
  { id: 'security', name: 'Home Security', vertical: ServiceVertical.HomeServices, icon: 'pi-lock', description: 'Security system installation', slug: 'security' },
  { id: 'solar', name: 'Solar', vertical: ServiceVertical.HomeServices, icon: 'pi-sun', description: 'Solar panel installation', slug: 'solar' },
];

// Insurance Categories
export const INSURANCE_CATEGORIES: ServiceCategory[] = [
  { id: 'auto-insurance', name: 'Auto Insurance', vertical: ServiceVertical.Insurance, icon: 'pi-car', description: 'Car insurance quotes', slug: 'auto-insurance', popular: true },
  { id: 'home-insurance', name: 'Home Insurance', vertical: ServiceVertical.Insurance, icon: 'pi-home', description: 'Homeowners insurance', slug: 'home-insurance', popular: true },
  { id: 'final-expense', name: 'Final Expense', vertical: ServiceVertical.Insurance, icon: 'pi-heart', description: 'Final expense insurance coverage', slug: 'final-expense', popular: true },
  { id: 'life-insurance', name: 'Life Insurance', vertical: ServiceVertical.Insurance, icon: 'pi-heart', description: 'Life insurance coverage', slug: 'life-insurance', popular: true },
  { id: 'health-insurance', name: 'Health Insurance', vertical: ServiceVertical.Insurance, icon: 'pi-heart-fill', description: 'Medical insurance plans', slug: 'health-insurance' },
  { id: 'renters-insurance', name: 'Renters Insurance', vertical: ServiceVertical.Insurance, icon: 'pi-building', description: 'Rental property insurance', slug: 'renters-insurance' },
  { id: 'medicare', name: 'Medicare', vertical: ServiceVertical.Insurance, icon: 'pi-users', description: 'Medicare plans and supplements', slug: 'medicare' },
  { id: 'final-expense', name: 'Final Expense', vertical: ServiceVertical.Insurance, icon: 'pi-bookmark', description: 'Final expense insurance', slug: 'final-expense' },
];

// Moving Categories
export const MOVING_CATEGORIES: ServiceCategory[] = [
  { id: 'full-service-movers', name: 'Full Service Movers', vertical: ServiceVertical.Moving, icon: 'pi-truck', description: 'Complete moving services', slug: 'moving', popular: true },
  { id: 'moving-labor', name: 'Moving Labor', vertical: ServiceVertical.Moving, icon: 'pi-users', description: 'Labor-only moving help', slug: 'moving-labor' },
  { id: 'car-shipping', name: 'Auto Shipping', vertical: ServiceVertical.Moving, icon: 'pi-car', description: 'Vehicle transportation', slug: 'car-shipping' },
  { id: 'storage', name: 'Storage Units', vertical: ServiceVertical.Moving, icon: 'pi-box', description: 'Storage facility rentals', slug: 'storage' },
  { id: 'utilities', name: 'Utility Setup', vertical: ServiceVertical.Moving, icon: 'pi-bolt', description: 'Utility connection services', slug: 'utilities' },
];

// Legal Categories
export const LEGAL_CATEGORIES: ServiceCategory[] = [
  { id: 'personal-injury', name: 'Personal Injury', vertical: ServiceVertical.Legal, icon: 'pi-shield', description: 'Personal injury attorneys', slug: 'personal-injury', popular: true },
  { id: 'auto-accident', name: 'Auto Accident', vertical: ServiceVertical.Legal, icon: 'pi-car', description: 'Car accident lawyers', slug: 'auto-accident', popular: true },
  { id: 'bankruptcy', name: 'Bankruptcy', vertical: ServiceVertical.Legal, icon: 'pi-money-bill', description: 'Bankruptcy attorneys', slug: 'bankruptcy' },
  { id: 'family-law', name: 'Family Law', vertical: ServiceVertical.Legal, icon: 'pi-users', description: 'Divorce and family attorneys', slug: 'family-law' },
  { id: 'criminal-defense', name: 'Criminal Defense', vertical: ServiceVertical.Legal, icon: 'pi-shield', description: 'Criminal defense lawyers', slug: 'criminal-defense' },
  { id: 'dui', name: 'DUI/DWI', vertical: ServiceVertical.Legal, icon: 'pi-exclamation-triangle', description: 'DUI defense attorneys', slug: 'dui' },
  { id: 'employment-law', name: 'Employment Law', vertical: ServiceVertical.Legal, icon: 'pi-briefcase', description: 'Employment attorneys', slug: 'employment-law' },
  { id: 'workers-comp', name: 'Workers Compensation', vertical: ServiceVertical.Legal, icon: 'pi-shield', description: 'Workers comp lawyers', slug: 'workers-comp' },
  { id: 'immigration', name: 'Immigration', vertical: ServiceVertical.Legal, icon: 'pi-globe', description: 'Immigration attorneys', slug: 'immigration' },
  { id: 'business-law', name: 'Business Law', vertical: ServiceVertical.Legal, icon: 'pi-briefcase', description: 'Business attorneys', slug: 'business-law' },
];

// Financial Categories
export const FINANCIAL_CATEGORIES: ServiceCategory[] = [
  { id: 'mortgage', name: 'Mortgage', vertical: ServiceVertical.Financial, icon: 'pi-home', description: 'Home loan quotes', slug: 'mortgage', popular: true },
  { id: 'refi-mortgage', name: 'Refinance', vertical: ServiceVertical.Financial, icon: 'pi-refresh', description: 'Mortgage refinancing', slug: 'refinance', popular: true },
  { id: 'personal-loan', name: 'Personal Loan', vertical: ServiceVertical.Financial, icon: 'pi-money-bill', description: 'Personal loan options', slug: 'personal-loan' },
  { id: 'auto-loan', name: 'Auto Loan', vertical: ServiceVertical.Financial, icon: 'pi-car', description: 'Car financing', slug: 'auto-loan' },
  { id: 'home-equity', name: 'Home Equity', vertical: ServiceVertical.Financial, icon: 'pi-home', description: 'Home equity loans', slug: 'home-equity' },
  { id: 'reverse-mortgage', name: 'Reverse Mortgage', vertical: ServiceVertical.Financial, icon: 'pi-arrow-circle-left', description: 'Reverse mortgage options', slug: 'reverse-mortgage' },
  { id: 'debt-relief', name: 'Debt Relief', vertical: ServiceVertical.Financial, icon: 'pi-dollar', description: 'Debt consolidation', slug: 'debt-relief' },
];

// Auto Categories
export const AUTO_CATEGORIES: ServiceCategory[] = [
  { id: 'auto-repair', name: 'Auto Repair', vertical: ServiceVertical.Auto, icon: 'pi-wrench', description: 'Car repair services', slug: 'auto-repair', popular: true },
  { id: 'oil-change', name: 'Oil Change', vertical: ServiceVertical.Auto, icon: 'pi-circle', description: 'Oil change services', slug: 'oil-change' },
  { id: 'tire-service', name: 'Tire Service', vertical: ServiceVertical.Auto, icon: 'pi-circle', description: 'Tire sales and service', slug: 'tire-service' },
  { id: 'auto-body', name: 'Auto Body', vertical: ServiceVertical.Auto, icon: 'pi-car', description: 'Body shop services', slug: 'auto-body' },
  { id: 'detailing', name: 'Auto Detailing', vertical: ServiceVertical.Auto, icon: 'pi-sparkles', description: 'Car detailing services', slug: 'detailing' },
];

// All Verticals
export const VERTICALS: Vertical[] = [
  {
    id: ServiceVertical.HomeServices,
    name: 'Home Services',
    description: 'Find trusted home improvement and maintenance professionals',
    icon: 'pi-home',
    color: 'from-blue-500 to-cyan-500',
    categories: HOME_SERVICES_CATEGORIES,
  },
  {
    id: ServiceVertical.Insurance,
    name: 'Insurance',
    description: 'Compare quotes for all your insurance needs',
    icon: 'pi-shield',
    color: 'from-green-500 to-emerald-500',
    categories: INSURANCE_CATEGORIES,
  },
  {
    id: ServiceVertical.Moving,
    name: 'Moving',
    description: 'Get quotes from trusted moving companies',
    icon: 'pi-truck',
    color: 'from-orange-500 to-red-500',
    categories: MOVING_CATEGORIES,
  },
  {
    id: ServiceVertical.Legal,
    name: 'Legal',
    description: 'Connect with experienced attorneys',
    icon: 'pi-briefcase',
    color: 'from-purple-500 to-pink-500',
    categories: LEGAL_CATEGORIES,
  },
  {
    id: ServiceVertical.Financial,
    name: 'Financial',
    description: 'Compare rates for loans and financial services',
    icon: 'pi-dollar',
    color: 'from-indigo-500 to-blue-500',
    categories: FINANCIAL_CATEGORIES,
  },
  {
    id: ServiceVertical.Auto,
    name: 'Auto',
    description: 'Find auto service providers near you',
    icon: 'pi-car',
    color: 'from-gray-600 to-gray-800',
    categories: AUTO_CATEGORIES,
  },
];

// Helper functions
export const getAllCategories = (): ServiceCategory[] => {
  return VERTICALS.flatMap(v => v.categories);
};

export const getPopularCategories = (): ServiceCategory[] => {
  return getAllCategories().filter(c => c.popular);
};

export const getCategoryBySlug = (slug: string): ServiceCategory | undefined => {
  return getAllCategories().find(c => c.slug === slug);
};

export const getVerticalById = (id: ServiceVertical): Vertical | undefined => {
  return VERTICALS.find(v => v.id === id);
};
