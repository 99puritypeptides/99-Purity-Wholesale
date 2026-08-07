import locationsData from '@/data/locations.json';
import { getTranslations } from 'next-intl/server';
import LocationsClient from '@/components/locations/LocationsClient';

export async function generateMetadata(props: any) {
  const params = props?.params || {};
  const locale = params?.locale || 'en';
  const t = await getTranslations({ locale, namespace: 'Meta' });
  return {
    title: t('locationsTitle'),
    description: t('locationsDesc'),
  
    alternates: {
      canonical: `https://99puritywholesale.com${locale === 'en' ? '/locations' : `/${locale}/locations`}`,
      languages: { 'en-US': '/locations', es: '/es/locations', 'x-default': '/locations' },
    },
  };
}

export default async function LocationsIndexPage() {
  return <LocationsClient locations={locationsData} />;
}
