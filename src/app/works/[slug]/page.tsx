import { yellowBlurDataURL } from '@/constants'
import { proyects } from '@/services'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Hero } from '../components'

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
          <li key={image.id} className='relative h-72 md:h-96'>
            <Image
              src={image.src}
              className='rounded-xl object-cover'
              fill
              blurDataURL={yellowBlurDataURL}
              placeholder='blur'
              alt='Image of the created design'
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default WorkDetailPage
