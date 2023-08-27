import { IFormFields } from '@/models'
import { FORM_FIELD_RULES } from '@/utils/constants'

export const createFormFieldRules = (type: keyof IFormFields) => {
  if (type === 'name') return FORM_FIELD_RULES.name
  if (type === 'email') return FORM_FIELD_RULES.email
  if (type === 'message') return FORM_FIELD_RULES.message
}
