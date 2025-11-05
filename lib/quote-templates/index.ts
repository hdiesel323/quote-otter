import { QuoteTemplate } from '@/types/quote-templates';
import { homeServiceTemplates } from './home-services';
import { insuranceServiceTemplates } from './insurance-services';

// Central template registry
// Add new service templates here as you create them
const templateRegistry: Record<string, QuoteTemplate> = {
  // Home services
  ...homeServiceTemplates,
  
  // Insurance services
  ...insuranceServiceTemplates,
  
  // TODO: Add more templates as needed
  // ...movingServiceTemplates,
  // ...legalServiceTemplates,
  // ...financialServiceTemplates,
  // ...autoServiceTemplates,
};

/**
 * Get quote template by service ID
 */
export function getQuoteTemplate(serviceId: string): QuoteTemplate | null {
  return templateRegistry[serviceId] || null;
}

/**
 * Get quote template by service slug
 */
export function getQuoteTemplateBySlug(slug: string): QuoteTemplate | null {
  const template = Object.values(templateRegistry).find(
    t => t.serviceSlug === slug
  );
  return template || null;
}

// Alias for convenience
export const getTemplateBySlug = getQuoteTemplateBySlug;

/**
 * Check if a service has a quote template
 */
export function hasQuoteTemplate(serviceId: string): boolean {
  return serviceId in templateRegistry;
}

/**
 * Get all available templates
 */
export function getAllTemplates(): QuoteTemplate[] {
  return Object.values(templateRegistry);
}

/**
 * Get templates by vertical
 */
export function getTemplatesByVertical(vertical: string): QuoteTemplate[] {
  return Object.values(templateRegistry).filter(t => t.vertical === vertical);
}

/**
 * Get template IDs that are ready for quote requests
 */
export function getReadyServiceIds(): string[] {
  return Object.keys(templateRegistry);
}

export { templateRegistry };
