import { proyects } from '@/services'
import clsx from 'clsx'
import Proyect from './Proyect'

function ProyectList() {
  const classes = {
    list: clsx('mx-auto grid max-w-screen-xl gap-4 px-4 py-10 lg:grid-cols-2')
  }

  return (
    <ul id='works' className={classes.list}>
      {proyects.map((proyect) => (
        <Proyect key={proyect.id} proyect={proyect} />
      ))}
    </ul>
  )
}

export default ProyectList
