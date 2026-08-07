import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: any) {
  const params = props?.params || {};
  const locale = params?.locale || 'en';
  const t = await getTranslations({ locale, namespace: 'Layout' });
  // Fallback to title string since some namespaces might not have nav fields for legal
  return {
    title: `Quality Compliance & Standards`,
    description: `Research Use Only (RUO) framework, safety standards, and HPLC/MS verification compliance.`,
    alternates: {
      canonical: `https://99puritywholesale.com${locale === 'en' ? '/compliance' : `/${locale}/compliance`}`,
      languages: { 'en-US': '/compliance', es: '/es/compliance', 'x-default': '/compliance' },
    }
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
