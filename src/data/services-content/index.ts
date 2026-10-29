import dropshipping from './dropshipping';
import launchSupport from './launch-support';
import websiteDevelopment from './website-development';
import salesDistribution from './sales-distribution';
import privateLabel from './private-label';
import fulfillmentConsulting from './fulfillment-consulting';
import servicesRegistryEs from './es';
import type { ServiceContent } from './types';

const servicesRegistry: Record<string, ServiceContent> = {
  dropshipping,
  'launch-support': launchSupport,
  'website-development': websiteDevelopment,
  'sales-distribution': salesDistribution,
  'private-label': privateLabel,
  'fulfillment-consulting': fulfillmentConsulting,
};

export function getServiceByLocale(slug: string, locale: string = 'en'): ServiceContent | undefined {
  if (locale === 'es' && servicesRegistryEs[slug]) {
    return servicesRegistryEs[slug];
  }
  return servicesRegistry[slug];
}

export { servicesRegistryEs };
export default servicesRegistry;
export type { ServiceContent };
