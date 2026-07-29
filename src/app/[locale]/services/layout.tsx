import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Layout' });
  const title = t('nav.services') || 'Services';
  return {
    title: `${title}`,
    description: `Explore our ${title} at 99 Purity Wholesale.`,
    alternates: {
      canonical: locale === 'en' ? '/services' : `/${locale}/services`,
      languages: { 'en-US': '/services', es: '/es/services', 'x-default': '/services' },
    }
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
