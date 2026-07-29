import { redirect } from 'next/navigation';
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: `Terms`,
    description: `Review our Terms policies.`,
    alternates: { canonical: `/${locale === 'en' ? '' : locale}/legal/terms` }
  };
}


export default function TermsRedirectPage() {
  redirect('/terms');
}
