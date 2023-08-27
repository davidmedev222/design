import { RegisterOptions } from 'react-hook-form'

export interface IFormFields {
  name: string
  email: string
  message: string
}

export type TFormFieldsRules = Record<keyof IFormFields, RegisterOptions>

export type IFormContact = Pick<IFormFields, 'name' | 'email' | 'message'>
