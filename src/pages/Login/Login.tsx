import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function Login() {
  //   const {register,
  //     handleSubmit,
  //     formState:{errors}} = useForm()

  // const onSubmit = handleSubmit(data =>{
  //   console.log("data",data)
  // })

  return (
    <div className='bg-orange-500'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm'>
              <div className='text-2xl'>Đăng Nhập</div>
              <div className='mt-4'>
                <input
                  type='email'
                  name='email'
                  className='w-full rounded-sm border border-gray-300 p-4 outline-none focus:border-gray-500 focus:shadow-sm '
                  placeholder='email'
                />
                <div className='mt-1 min-h-[1rem] text-sm text-red-500'></div>
              </div>
              <div className='mt-4'>
                <input
                  type='password'
                  name='password'
                  className='w-full rounded-sm border border-gray-300 p-4 outline-none focus:border-gray-500 focus:shadow-sm '
                  placeholder='password'
                  autoComplete='on'
                />
                <div className='mt-1 min-h-[1rem] text-sm text-red-500'></div>
              </div>
              <div className='mt-3'>
                <button
                  type='submit'
                  className='w-full bg-red-500 px-2 py-4 text-center text-sm uppercase text-white hover:text-red-600'
                >
                  {' '}
                  Đăng nhập{' '}
                </button>
              </div>
              <div className='mt-8   '>
                <div className='flex items-center justify-center text-center '>
                  <span className=' text-center text-slate-400'>Bạn mới biết đến Shopee??</span>
                  <Link className='ml-2 text-red-500' to='/register'>
                    Đăng Ký
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
