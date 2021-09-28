const withPWA = require('next-pwa')
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "en-US",
    localeDetection: true
  },
})
