import dropshipping from './dropshipping';
import launchSupport from './launch-support';
import websiteDevelopment from './website-development';
import salesDistribution from './sales-distribution';
import privateLabel from './private-label';
import fulfillmentConsulting from './fulfillment-consulting';
import type { ServiceContent } from './types';

const servicesRegistry: Record<string, ServiceContent> = {
  dropshipping,
  'launch-support': launchSupport,
  'website-development': websiteDevelopment,
  'sales-distribution': salesDistribution,
  'private-label': privateLabel,
  'fulfillment-consulting': fulfillmentConsulting,
};

export default servicesRegistry;
export type { ServiceContent };
