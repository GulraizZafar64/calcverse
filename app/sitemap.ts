import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://calcverse.site'
  const lastModified = new Date()

  const routes = [
    '',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/disclaimer',
    '/loan-emi',
    '/compound-interest',
    '/mortgage',
    '/salary-after-tax',
    '/loan-calculators',
    '/investment-calculators',
    '/salary-calculators',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
