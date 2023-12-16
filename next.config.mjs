/** @type {import('next').NextConfig} */
const config = {
  images: { remotePatterns: [{ hostname: 'cdn.sanity.io' }] },
  i18n: {
    locales: ['ro', 'en-US'],
    defaultLocale: 'ro',
    localeDetection: false,
  },
  trailingSlash: true,
}

export default config
