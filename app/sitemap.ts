import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thegreenvillescguide.com'
  
  const categories = [
    'tennis-courts',
    'golf-courses',
    'pickleball-courts',
    'hiking',
    'rv-parks',
    'gyms',
    'pools',
    'parks',
  ]

  const greenvillePages = categories.map(category => ({
    url: `${baseUrl}/greenville/${category}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const spartanburgPages = categories.map(category => ({
    url: `${baseUrl}/spartanburg/${category}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/greenville/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/spartanburg/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...greenvillePages,
    ...spartanburgPages,
  ]
}
