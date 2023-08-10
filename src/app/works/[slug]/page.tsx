import { proyects } from '@/services'
import { notFound } from 'next/navigation'
import { Hero, Proyect } from '../components'

interface Params {
  slug: string
}

interface Props {
  params: Params
}

function WorkDetailPage({ params }: Props) {
  const proyect = proyects.find((proyect) => proyect.slug === params.slug)

  if (proyect === undefined) {
    notFound()
  }

  return (
    <main>
      <Hero proyect={proyect} />
      <ul id='mockups' className='mx-auto grid max-w-screen-xl gap-y-4 px-4 py-10'>
        {proyect.images.map((image) => (
          <Proyect key={image.id} imageURL={image.src} />
        ))}
      </ul>
    </main>
  )
}

export default WorkDetailPage
