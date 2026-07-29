import { redirect } from 'next/navigation';
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: `Privacy`,
    description: `Review our Privacy policies.`,
    alternates: { canonical: `/${locale === 'en' ? '' : locale}/legal/privacy` }
  };
}


export default function PrivacyRedirectPage() {
  redirect('/privacy');
}
