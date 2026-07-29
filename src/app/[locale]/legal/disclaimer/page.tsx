import { redirect } from 'next/navigation';
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: `Disclaimer`,
    description: `Review our Disclaimer policies.`,
    alternates: { canonical: `/${locale === 'en' ? '' : locale}/legal/disclaimer` }
  };
}


export default function DisclaimerRedirectPage() {
  redirect('/compliance');
}
