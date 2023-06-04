import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'
type Rules = { [key in 'email' | 'password' | 'cofirm_password']?: RegisterOptions }
// eslint-disable-next-line @typescript-eslint/no-explicit-any, prettier/prettier
// export const getrule = (getValues?: UseFormGetValues<any>): Rules => ({
//   email: {
//     required: {
//       value: true,
//       message: 'Email là không được để trống'
//     },
//     pattern: {
//       value: /^\S+@\S+\.\S+$/,
//       message: 'email không đúng vui lòng kiểm tra lại'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Độ dài từ 5-160 ký tự'
//     },
//     minLength: {
//       value: 5,
//       message: 'Độ dài từ 5-160 ký tự'
//     }
//   },

//   password: {
//     required: {
//       value: true,
//       message: 'password là không được để trống'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Độ dài từ 6-160 ký tự'
//     },
//     minLength: {
//       value: 5,
//       message: 'Độ dài từ 6-160 ký tự'
//     }
//   },
//   cofirm_password: {
//     required: {
//       value: true,
//       message: 'cofirm_password là không được để trống'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Độ dài từ 6-160 ký tự'
//     },
//     minLength: {
//       value: 5,
//       message: 'Độ dài từ 6-160 ký tự'
//     },
//     validate:
//       typeof getValues == 'function'
//         ? (value) => value == getValues('password') || 'nhập lại password không khớp'
//         : undefined
//   }
// })
export const schema = yup.object({
  email: yup
    .string()
    .required('Email là không được để trống')
    .email('email không đúng vui lòng kiểm tra lại')
    .min(5, 'Độ dài từ 5-160 ký tự')
    .max(160, 'Độ dài từ 5-160 ký tự'),
  password: yup
    .string()
    .required('password là không được để trống')
    .min(5, 'Độ dài từ 6-160 ký tự')
    .max(160, 'Độ dài từ 6-160 ký tự'),
  cofirm_password: yup
    .string()
    .required('Nhập lại password là không được để trống')
    .min(5, 'Độ dài từ 6-160 ký tự')
    .max(160, 'Độ dài từ 6-160 ký tự')
    .oneOf([yup.ref('password')], 'Xác nhận mật khẩu không khớp với mật khẩu')
})

const loginSchema = schema.omit(['cofirm_password'])

type loginSchema = yup.InferType<typeof loginSchema>
export type Schema = yup.InferType<typeof schema>
