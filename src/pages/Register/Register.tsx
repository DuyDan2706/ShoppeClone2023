import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { schema, Schema } from 'src/utils/rule'
import Input from 'src/components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { registerAccount } from 'src/apis/auth.api'
import { omit } from 'lodash'
import { isAxiosUnprocessableEntityErorr } from 'src/utils/untils'
import { ErrorReponse } from 'src/types/until.type'
import { AppContext } from 'src/contexts/app.context'

type FormData = Schema

export default function Register() {
  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  // goi api len
  const registerAccountMultion = useMutation({
    mutationFn: (body: Omit<FormData, 'cofirm_password'>) => registerAccount(body)
  })

  //const rule = getrule(getValues)
  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['cofirm_password'])
    registerAccountMultion.mutate(body, {
      onSuccess: (data) => {
        console.log('data', data)
        setIsAuthenticated(true)
        navigate('/')
    
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityErorr<ErrorReponse<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: formError[key as keyof Omit<FormData, 'confirm_password'>],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })

  //  const value = watch()   ho tro go den dau log den do
  //  console.log("dan",value)
  return (
    <div className=' bg-orange-500 '>
      {/* <div className='mx-auto max-w-7xl px-4 '> */}
      <div className='container '>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className=' lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-center text-2xl'>Đăng Kí</div>
              <Input
                name='email'
                register={register}
                type='email'
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email'
                //rule={rule.email}
                autoComplete='on'
              />
              <Input
                name='password'
                register={register}
                type='password'
                className='mt-4'
                errorMessage={errors.password?.message}
                placeholder='password'
                //rule={rule.password}
                autoComplete='on'
              />
              <Input
                name='cofirm_password'
                register={register}
                type='password'
                className='mt-4'
                errorMessage={errors.cofirm_password?.message}
                placeholder='Cofirm password'
                //rule={rule.cofirm_password}
                autoComplete='on'
              />
              {/* // <div className='mt-8'>
              //   <input
              //     type='email'
              //     // name='email'
              //     className='w-full rounded-sm border border-gray-300 p-4 outline-none focus:border-gray-500 focus:shadow-sm '
              //     placeholder='email'
              //     {...register('email', rule.email)}
              //   />
              //   <div className='mt-1 min-h-[1.25rem] text-sm text-red-500'> {errors.email?.message}</div>
              // </div> */}
              {/* <div className='mt-4'>
                <input
                  type='password'
                  className='w-full rounded-sm border border-gray-300 p-4 outline-none focus:border-gray-500 focus:shadow-sm '
                  placeholder='password'
                  autoComplete='on'
                  {...register('password', rule.password)}
                />
                <div className='mt-1 min-h-[1rem] text-sm text-red-500'>{errors.password?.message}</div>
              </div> */}
              {/* <div className='mt-4'>
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
              </div> */}
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
