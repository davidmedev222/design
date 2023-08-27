import { TFormFieldsRules } from '@/models'

export const FORM_FIELD_RULES: TFormFieldsRules = {
  name: {
    required: {
      value: true,
      message: 'Please enter your name.'
    }
  },
  email: {
    required: {
      value: true,
      message: 'Please enter your email address.'
    },
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: 'Enter a valid email address.'
    }
  },
  message: {
    required: {
      value: true,
      message: 'Please enter your message.'
    },
    minLength: {
      value: 25,
      message: 'The message is too short. Please provide more details.'
    }
  }
}
