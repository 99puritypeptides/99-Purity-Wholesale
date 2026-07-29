import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Layout' });
  // Fallback to title string since some namespaces might not have nav fields for legal
  return {
    title: `Terms of Service`,
    description: `Terms of Service and wholesale laboratory research guidelines for 99 Purity Wholesale.`,
    alternates: {
      canonical: locale === 'en' ? '/terms' : `/${locale}/terms`,
      languages: { 'en-US': '/terms', es: '/es/terms', 'x-default': '/terms' },
    }
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
