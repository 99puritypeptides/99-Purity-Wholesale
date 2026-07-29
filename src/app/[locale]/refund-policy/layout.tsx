import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Layout' });
  // Fallback to title string since some namespaces might not have nav fields for legal
  return {
    title: `Refund & Replacement Policy`,
    description: `Return, replacement, and HPLC verification policies for 99 Purity Wholesale orders.`,
    alternates: {
      canonical: locale === 'en' ? '/refund-policy' : `/${locale}/refund-policy`,
      languages: { 'en-US': '/refund-policy', es: '/es/refund-policy', 'x-default': '/refund-policy' },
    }
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
