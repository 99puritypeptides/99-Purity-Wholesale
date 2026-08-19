import createNextIntlPlugin from 'next-intl/plugin';
import withPWAInit from 'next-pwa';

const withNextIntl = createNextIntlPlugin();

const withPWA = withPWAInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  async redirects() {
    return [
      {
        source: '/work',
        destination: '/',
        permanent: false,
      },
      {
        source: '/en/work',
        destination: '/en',
        permanent: false,
      },
      {
        source: '/es/work',
        destination: '/es',
        permanent: false,
      },
      {
        source: '/quality',
        destination: '/certificates-of-analysis',
        permanent: true,
      },
      {
        source: '/legal/terms',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/legal/privacy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/legal/disclaimer',
        destination: '/compliance',
        permanent: true,
      }
    ];
  },
};

export default withPWA(withNextIntl(nextConfig));
