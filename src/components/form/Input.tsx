'use client'
import { IFormFields } from '@/models'
import { createFormFieldRules } from '@/utils/functions'
import { ErrorMessage } from '@hookform/error-message'
import clsx from 'clsx'
import { HTMLInputTypeAttribute } from 'react'
import { useFormContext } from 'react-hook-form'

interface Props {
  type: HTMLInputTypeAttribute
  name: keyof IFormFields
  placeholder: string
}

function Input({ type, name, placeholder }: Props) {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const classes = {
    container: clsx('grid gap-y-1.5'),
    input: clsx(errors[name] && 'border-red-500 focus:border-red-500 focus:ring-red-500')
  }

  return (
    <div className={classes.container}>
      <input
        type={type}
        placeholder={placeholder}
        className={classes.input}
        {...register(name, createFormFieldRules(name))}
      />
      <ErrorMessage name={name} as='p' errors={errors} />
    </div>
  )
}

export default Input
