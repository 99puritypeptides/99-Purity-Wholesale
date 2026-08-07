import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: any) {
  const params = props?.params || {};
  const locale = params?.locale || 'en';
  const t = await getTranslations({ locale, namespace: 'Layout' });
  // Fallback to title string since some namespaces might not have nav fields for legal
  return {
    title: `Privacy Policy`,
    description: `Privacy policy and B2B data handling practices for 99 Purity Wholesale.`,
    alternates: {
      canonical: `https://99puritywholesale.com${locale === 'en' ? '/privacy' : `/${locale}/privacy`}`,
      languages: { 'en-US': '/privacy', es: '/es/privacy', 'x-default': '/privacy' },
    }
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
