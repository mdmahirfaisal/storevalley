import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MY ECOMMERCE APP',
    short_name: 'ecommerce',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/faisal-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/faisal-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}