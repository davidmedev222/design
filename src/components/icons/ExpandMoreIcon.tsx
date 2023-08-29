interface Props {
  className: string
  size: number
}

function ExpandMoreIcon({ className, size }: Props) {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' height={size} width={size} viewBox='0 -960 960 960'>
      <path d='M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z' />
    </svg>
  )
}

export default ExpandMoreIcon
