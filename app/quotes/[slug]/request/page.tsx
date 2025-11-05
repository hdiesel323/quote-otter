import { redirect } from 'next/navigation';
import QuoteFlowEngine from '@/components/quote-flow/QuoteFlowEngine';
import { getTemplateBySlug } from '@/lib/quote-templates';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    zip?: string;
    city?: string;
    state?: string;
  }>;
}

export default async function QuoteRequestPage(props: PageProps) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  
  const { slug } = params;
  const { zip, city, state } = searchParams;

  // Get template for this service
  const template = getTemplateBySlug(slug);

  if (!template) {
    redirect('/services');
  }

  // Validate ZIP code is provided
  if (!zip) {
    redirect(`/quotes/${slug}`);
  }

  // Prepare initial data
  const initialData = {
    serviceId: template.serviceId,
    serviceName: template.serviceName,
    zipCode: zip,
    location: city && state ? { city, state } : undefined
  };

  return <QuoteFlowEngine template={template} initialData={initialData} />;
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const template = getTemplateBySlug(params.slug);

  if (!template) {
    return {
      title: 'Service Not Found | QuoteOtter',
    };
  }

  return {
    title: `Request ${template.serviceName} Quote | QuoteOtter`,
    description: `Get free quotes for ${template.serviceName}. Compare multiple providers and choose the best option for your needs.`
  };
}
