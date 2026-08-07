import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: any) {
  const params = props?.params || {};
  const locale = params?.locale || 'en';
  const t = await getTranslations({ locale, namespace: 'Layout' });
  const title = t('nav.services') || 'Services';
  return {
    title: `${title}`,
    description: `Explore our ${title} at 99 Purity Wholesale.`,
    alternates: {
      canonical: `https://99puritywholesale.com${locale === 'en' ? '/services' : `/${locale}/services`}`,
      languages: { 'en-US': '/services', es: '/es/services', 'x-default': '/services' },
    }
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
