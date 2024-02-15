/** @type {import('next').NextConfig} */
const config = {
  images: { remotePatterns: [{ hostname: 'cdn.sanity.io' }] },
  i18n: {
    locales: ['ro', 'en-US'],
    defaultLocale: 'ro',
    localeDetection: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
      config.resolve.fallback.tls = false
      config.resolve.fallback.net = false
      config.resolve.fallback.child_process = false
    }

    return config
  },
  env: {
    GOOGLE_SERVICE_PRIVATE_KEY: process.env.GOOGLE_SERVICE_PRIVATE_KEY,
  },
  trailingSlash: true,
}

export default config
