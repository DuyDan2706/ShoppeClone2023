import type { RegisterOptions,UseFormGetValues } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'cofirm_password']?: RegisterOptions }
export const getrule = (getValues?:UseFormGetValues<any>):Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email là không được để trống'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'email không đúng vui lòng kiểm tra lại'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 5-160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 5-160 ký tự'
    }
  },

  password: {
    required: {
      value: true,
      message: 'password là không được để trống'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6-160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 6-160 ký tự'
    }
  },
  cofirm_password: {
    required: {
      value: true,
      message: 'cofirm_password là không được để trống'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6-160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 6-160 ký tự'
    },
    validate : typeof getValues == 'function' ? ((value) => 
     value == getValues('password') || 'nhập lại password không khớp') : undefined
  }
})
