import ExpandMoreIcon from '../icons/ExpandMoreIcon'

interface Props {
  text: string
}

function RedirectText({ text }: Props) {
  return (
    <div className='grid place-items-center gap-y-4 p-10'>
      <span className='text-sm uppercase tracking-widest'>{text}</span>
      <ExpandMoreIcon className='fill-black/50 dark:fill-white' size={32} />
    </div>
  )
}

export default RedirectText
