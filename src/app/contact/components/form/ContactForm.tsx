'use client'
import { useIntersectionObserver } from '@/hooks'
import clsx from 'clsx'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

interface IFormFields {
  name: string
  email: string
  textarea: string
}

function ContactForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormFields>()

  const [isIntersecting, ref] = useIntersectionObserver({ options: { threshold: 0.25 }, unobserve: true })

  const classes = {
    form: clsx('mx-auto grid max-w-screen-md gap-y-5 p-4 opacity-0', isIntersecting && 'animate-scale-in'),
    inputs: {
      input: clsx('grid gap-y-1.5'),
      name: clsx(errors.name && 'border-red-500 focus:border-red-500 focus:ring-red-500'),
      email: clsx(errors.email && 'border-red-500 focus:border-red-500 focus:ring-red-500'),
      textarea: clsx(errors.textarea && 'border-red-500 focus:border-red-500 focus:ring-red-500'),
      error: clsx('pl-2 text-sm text-red-500')
    },
    button: clsx(
      'mt-5 rounded-lg bg-black px-10 py-5 text-center text-lg text-white transition-colors duration-300 hover:bg-gray-700'
    )
  }

  const onSubmit: SubmitHandler<IFormFields> = () => {
    toast.success('Message sent successfully.')
    reset()
  }

  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <div className={classes.inputs.input}>
        <input
          className={classes.inputs.name}
          type='text'
          placeholder='Name'
          {...register('name', {
            required: {
              value: true,
              message: 'Please enter your name.'
            }
          })}
        />
        {errors.name && <p className={classes.inputs.error}>{errors.name.message}</p>}
      </div>
      <div className={classes.inputs.input}>
        <input
          className={classes.inputs.email}
          type='email'
          placeholder='Email'
          {...register('email', {
            required: {
              value: true,
              message: 'Please enter your email address.'
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Enter a valid email address.'
            }
          })}
        />
        {errors.email && <p className={classes.inputs.error}>{errors.email.message}</p>}
      </div>
      <div className={classes.inputs.input}>
        <textarea
          className={classes.inputs.textarea}
          rows={8}
          placeholder='Message'
          {...register('textarea', {
            required: {
              value: true,
              message: 'Please enter your message.'
            },
            minLength: {
              value: 25,
              message: 'The message is too short. Please provide more details.'
            }
          })}
        />
        {errors.textarea && <p className={classes.inputs.error}>{errors.textarea.message}</p>}
      </div>
      <button className={classes.button}>Contact Me</button>
    </form>
  )
}

export default ContactForm
