import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: any) {
  const params = props?.params || {};
  const locale = params?.locale || 'en';
  const t = await getTranslations({ locale, namespace: 'Meta' });
  
  return {
    title: t('coaTitle'),
    description: t('coaDesc'),
    alternates: {
      canonical: `https://99puritywholesale.com${locale === 'en' ? '/certificates-of-analysis' : `/${locale}/certificates-of-analysis`}`,
      languages: { 'en-US': '/certificates-of-analysis', es: '/es/certificates-of-analysis', 'x-default': '/certificates-of-analysis' },
    }
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
