import dropshippingEs from './dropshipping';
import launchSupportEs from './launch-support';
import salesDistributionEs from './sales-distribution';
import websiteDevelopmentEs from './website-development';
import type { ServiceContent } from '../types';

const servicesRegistryEs: Record<string, ServiceContent> = {
  dropshipping: dropshippingEs,
  'launch-support': launchSupportEs,
  'sales-distribution': salesDistributionEs,
  'website-development': websiteDevelopmentEs,
};

export default servicesRegistryEs;

