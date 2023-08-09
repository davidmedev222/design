import { proyectImage, proyectImage2, proyectImage3, proyectImage4, yellowBlurDataURL } from '@/constants'
import clsx from 'clsx'
import Image from 'next/image'

function ProyectList() {
  const classes = {
    list: clsx('mx-auto grid max-w-screen-xl gap-4 px-4 py-10 lg:grid-cols-2'),
    proyect: clsx('group relative aspect-square'),
    image: clsx('rounded-xl object-cover'),
    background: clsx(
      'absolute bottom-0 grid h-full w-full items-end rounded-xl bg-gradient-to-t from-black px-6 py-4 transition-opacity duration-700 group-hover:opacity-100 lg:opacity-0'
    ),
    name: clsx(
      'text-fluid-8xl text-white transition duration-500 lg:translate-y-6 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100'
    )
  }

  return (
    <ul className={classes.list}>
      <li className={classes.proyect}>
        <Image
          src={proyectImage}
          alt='Mockup of a design presentation'
          fill
          sizes='(max-width: 1024px) 100vw, 50vw'
          className={classes.image}
          blurDataURL={yellowBlurDataURL}
          placeholder='blur'
        />
        <div className={classes.background}>
          <span className={classes.name}>Flux</span>
        </div>
      </li>
      <li className={classes.proyect}>
        <Image
          src={proyectImage2}
          alt='Mockup of a design presentation'
          fill
          sizes='(max-width: 1024px) 100vw, 50vw'
          className={classes.image}
          blurDataURL={yellowBlurDataURL}
          placeholder='blur'
        />
        <div className={classes.background}>
          <span className={classes.name}>Chroma</span>
        </div>
      </li>
      <li className={classes.proyect}>
        <Image
          src={proyectImage3}
          alt='Mockup of a design presentation'
          fill
          sizes='(max-width: 1024px) 100vw, 50vw'
          className={classes.image}
          blurDataURL={yellowBlurDataURL}
          placeholder='blur'
        />
        <div className={classes.background}>
          <span className={classes.name}>Pixel Perfect</span>
        </div>
      </li>
      <li className={classes.proyect}>
        <Image
          src={proyectImage4}
          alt='Mockup of a design presentation'
          fill
          sizes='(max-width: 1024px) 100vw, 50vw'
          className={classes.image}
          blurDataURL={yellowBlurDataURL}
          placeholder='blur'
        />
        <div className={classes.background}>
          <span className={classes.name}>Elevate</span>
        </div>
      </li>
    </ul>
  )
}

export default ProyectList
