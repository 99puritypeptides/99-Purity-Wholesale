import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: any) {
  const params = props?.params || {};
  const locale = params?.locale || 'en';
  const t = await getTranslations({locale, namespace: 'Meta'});
  return {
    title: t('contactTitle'),
    description: t('contactDesc'),
  
    alternates: {
      canonical: `https://99puritywholesale.com${locale === 'en' ? '/contact' : `/${locale}/contact`}`,
      languages: { 'en-US': '/contact', es: '/es/contact', 'x-default': '/contact' },
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
