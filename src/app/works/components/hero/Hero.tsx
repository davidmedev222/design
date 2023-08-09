import { ButtonLink } from '@/components'
import { IProyect } from '@/models'

interface Props {
  proyect: IProyect
}

function Hero({ proyect }: Props) {
  return (
    <section className='mx-auto grid max-w-screen-lg gap-y-8 p-8'>
      <h1 className='text-center text-[min(17vw,90px)]'>{proyect.title}</h1>
      <p className='text-center text-base text-gray-500'>{proyect.description}</p>
      <ButtonLink href='#mockups' border='rounded' align='center'>
        View Designs
      </ButtonLink>
    </section>
  )
}

export default Hero
