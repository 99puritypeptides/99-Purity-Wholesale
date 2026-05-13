import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
export const locales = ['en', 'es'];
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  const targetLocale = locales.includes(locale as string) ? (locale as string) : 'en';

  return {
    locale: targetLocale,
    messages: (await import(`../../messages/${targetLocale}.json`)).default
  };
});
