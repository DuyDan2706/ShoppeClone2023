import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getrule } from 'src/utils/rule'


interface FormData {
  email: string
  password: string
  cofirm_password: string
}
export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>()

    const rule = getrule(getValues)
  const onSubmit = handleSubmit(
    (data) => {
      console.log('data', data)
    },
    (data) => {
      const password = getValues('password')
      console.log('password', password)
    }
  )
  console.log('errors', errors)

  return (
    <div className='bg-orange-500'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Kí</div>
              <div className='mt-4'>
                <input
                  type='email'
                  // name='email'
                  className='w-full rounded-sm border border-gray-300 p-4 outline-none focus:border-gray-500 focus:shadow-sm '
                  placeholder='email'
                  {...register('email', rule.email)}
                />
                <div className='mt-1 min-h-[1.25rem] text-sm text-red-500'> {errors.email?.message}</div>
              </div>
              <div className='mt-4'>
                <input
                  type='password'
                  className='w-full rounded-sm border border-gray-300 p-4 outline-none focus:border-gray-500 focus:shadow-sm '
                  placeholder='password'
                  autoComplete='on'
                  {...register('password', rule.password)}
                />
                <div className='mt-1 min-h-[1rem] text-sm text-red-500'>{errors.password?.message}</div>
              </div>
              <div className='mt-4'>
                <input
                  type='password'
                  // name='cofirm_password'
                  className='w-full rounded-sm border border-gray-300 p-4 outline-none focus:border-gray-500 focus:shadow-sm '
                  placeholder='Cofirm password'
                  autoComplete='on'
                  {...register('cofirm_password', {
                    ...rule.cofirm_password
                  
                  })}
                />
                <div className='mt-1 min-h-[1rem] text-sm text-red-500'>{errors.cofirm_password?.message}</div>
              </div>
              <div className='mt-3'>
                <button
                  type='submit'
                  className='w-full bg-red-500 px-2 py-4 text-center text-sm uppercase text-white hover:text-red-600'
                >
                  {' '}
                  Đăng Kí{' '}
                </button>
              </div>
              <div className='mt-8   '>
                <div className='flex items-center justify-center text-center '>
                  <span className=' text-center text-slate-400'>Bạn đã có tài khoản?</span>
                  <Link className='ml-2 text-red-500' to='/login'>
                    Đăng nhập
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
