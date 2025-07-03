import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const slug = event.context.params?.slug
  const method = event.method

  if (!slug) return { error: 'slug is required' }

  if (method === 'GET') {
    const data = await prisma.postMetric.findUnique({
      where: { slug }
    })
    return data || { views: 0, likes: 0 }
  }

  if (method === 'POST') {
    const body = await readBody(event)
    const action = body.action

    if (!['view', 'like'].includes(action)) return { error: 'Invalid Action' }

    const update = action === 'view'
      ? { views: { increment: 1 } }
      : { likes: { increment: 1 } }

    const data = await prisma.postMetric.upsert({
      where: { slug },
      update: update,
      create: {
        slug,
        views: action === 'view' ? 1 : 0,
        likes: action === 'like' ? 1 : 0
      }
    })

    return data
  }

  return { error: 'Unsupported method' }
})
