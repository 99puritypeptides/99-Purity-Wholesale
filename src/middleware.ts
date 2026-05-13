import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match all pathnames except for
  // - api routes
  // - _next (static files)
  // - _vercel (Vercel internals)
  // - static files (e.g. /favicon.ico, /sitemap.xml, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
