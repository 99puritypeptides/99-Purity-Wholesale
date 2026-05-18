import CategoryPage, { generateMetadata as dynamicGenerateMetadata } from '../[category]/page';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return dynamicGenerateMetadata({ params: { ...params, category: 'recovery-research' } });
}

export default async function Page({ params }: { params: { locale: string } }) {
  return CategoryPage({ params: { ...params, category: 'recovery-research' } });
}
