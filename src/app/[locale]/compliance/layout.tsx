import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Layout' });
  // Fallback to title string since some namespaces might not have nav fields for legal
  return {
    title: `Quality Compliance & Standards`,
    description: `Research Use Only (RUO) framework, safety standards, and HPLC/MS verification compliance.`,
    alternates: { canonical: `/${locale === 'en' ? '' : locale}/compliance` }
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
