import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'kd7sultj', // Ваш Project ID из Sanity
  dataset: 'production',
  useCdn: false, // false если нужны самые свежие данные
  apiVersion: '2024-01-01', // дата API
})
