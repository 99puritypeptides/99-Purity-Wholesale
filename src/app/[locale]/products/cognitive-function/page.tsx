import CategoryPage, { generateMetadata as dynamicGenerateMetadata } from '../_category/page';

export async function generateMetadata(props: any) {
  const params = props?.params || {};
  const locale = params?.locale || 'en';
  return dynamicGenerateMetadata({ params: { ...params, category: 'cognitive-function' } });
}

export default async function Page({ params }: { params: { locale: string } }) {
  return CategoryPage({ params: { ...params, category: 'cognitive-function' } });
}
