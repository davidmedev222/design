import { proyectImage, proyectImage2, proyectImage3, proyectImage4 } from '@/constants'

export const proyects = [
  { id: crypto.randomUUID(), title: 'Flux', src: proyectImage, slug: 'flux' },
  { id: crypto.randomUUID(), title: 'Chroma', src: proyectImage2, slug: 'chroma' },
  { id: crypto.randomUUID(), title: 'Pixel Perfect', src: proyectImage3, slug: 'pixel-perfect' },
  { id: crypto.randomUUID(), title: 'Elevate', src: proyectImage4, slug: 'elevate' }
]
