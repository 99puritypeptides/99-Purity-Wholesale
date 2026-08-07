import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: any) {
  const params = props?.params || {};
  const locale = params?.locale || 'en';
  const t = await getTranslations({locale, namespace: 'Meta'});
  return {
    title: t('aboutTitle'),
    description: t('aboutDesc'),
  
    alternates: {
      canonical: `https://99puritywholesale.com${locale === 'en' ? '/about' : `/${locale}/about`}`,
      languages: { 'en-US': '/about', es: '/es/about', 'x-default': '/about' },
    },
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
