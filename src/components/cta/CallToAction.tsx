import ButtonLink from '../button/ButtonLink'

function CallToAction() {
  return (
    <section className='mx-auto grid max-w-screen-lg items-center justify-center gap-y-10 p-10'>
      <h2 className='text-center text-[min(5.25vw,44px)]'>
        I've been helping business thrive in the digital space also increasing drastically their revenues building
        insightful strategy, creating unique designs and crafting experiences that bring positive change and value.
      </h2>
      <ButtonLink href='#works' border='rounded' align='center'>
        Explore Designs
      </ButtonLink>
    </section>
  )
}

export default CallToAction
