'use client'
import { IFormFields } from '@/models'
import { createFormFieldRules } from '@/utils/functions'
import { ErrorMessage } from '@hookform/error-message'
import clsx from 'clsx'
import { useFormContext } from 'react-hook-form'

interface Props {
  name: keyof IFormFields
  placeholder: string
  rows: number
}

function Textarea({ name, placeholder, rows }: Props) {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const classes = {
    container: clsx('grid gap-y-1.5'),
    textarea: clsx(
      errors[name] &&
        'border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:focus:border-red-500 dark:focus:ring-red-500'
    )
  }

  return (
    <div className={classes.container}>
      <textarea
        className={classes.textarea}
        placeholder={placeholder}
        rows={rows}
        {...register(name, createFormFieldRules(name))}
      />
      <ErrorMessage name={name} as='p' errors={errors} />
    </div>
  )
}

export default Textarea
