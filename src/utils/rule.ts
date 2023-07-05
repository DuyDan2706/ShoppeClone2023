// import type { RegisterOptions } from 'react-hook-form'
import * as yup from 'yup'
// type Rules = { [key in 'email' | 'password' | 'cofirm_password']?: RegisterOptions }
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
    .oneOf([yup.ref('password')], 'Xác nhận mật khẩu không khớp với mật khẩu'),
    price_min: yup.string().test({
      name: 'price-not-allowed',
      message: 'Giá không phù hợp',
      test: testPriceMinMax
    }),
    price_max: yup.string().test({
      name: 'price-not-allowed',
      message: 'Giá không phù hợp',
      test: testPriceMinMax
    }),
    name: yup.string().trim().required('Tên sản phẩm là bắt buộc')
})
function testPriceMinMax(this: yup.TestContext<yup.AnyObject>) {
  const { price_max, price_min } = this.parent as { price_min: string; price_max: string }
  if (price_min !== '' && price_max !== '') {
    return Number(price_max) >= Number(price_min)
  }
  return price_min !== '' || price_max !== ''
}

// const handleConfirmPasswordYup = (refString: string) => {
//   return yup
//     .string()
//     .required('Nhập lại password là bắt buộc')
//     .min(6, 'Độ dài từ 6 - 160 ký tự')
//     .max(160, 'Độ dài từ 6 - 160 ký tự')
//     .oneOf([yup.ref(refString)], 'Nhập lại password không khớp')
// }
// const loginSchema = schema.omit(['cofirm_password'])

// type loginSchema = yup.InferType<typeof loginSchema>
export type Schema = yup.InferType<typeof schema>
