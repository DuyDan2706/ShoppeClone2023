import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { schema, Schema } from 'src/utils/rule'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { login } from 'src/apis/auth.api'
import { omit } from 'lodash'
import { isAxiosUnprocessableEntityErorr } from 'src/utils/untils'
import { ErrorReponse } from 'src/types/until.type'
import Input from 'src/components/Input'
import { AppContext } from 'src/contexts/app.context'

type FormData = Omit<Schema, 'confirm_password'>

const loginSchema = schema.omit(['cofirm_password'])
export default function Login() {
  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const loginAccountMultion = useMutation({
    mutationFn: (body: Omit<FormData, 'cofirm_password'>) => login(body)
  })

  //const rule = getrule(getValues)
  const onSubmit = handleSubmit((data) => {
    console.log('login', data)
    setIsAuthenticated(true)
    navigate('/')

    loginAccountMultion.mutate(data, {
      onSuccess: (data) => {
        console.log('data', data)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityErorr<ErrorReponse<FormData>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: formError[key as keyof FormData],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })

  return (
    <div className='bg-orange-500'>
      <div className='container'>
        <div className='grid grid-cols-2 py-12 lg:grid-cols-5 lg:py-32 lg:pr-11'>
          {/* <div className='lg:col-span-2' >
        <img
            className=' h-auto p-6 -mt-4 shadow-sm'
            src='https://firebasestorage.googleapis.com/v0/b/subscriptionmilk.appspot.com/o/img%2FTD%20(2).png?alt=media&token=14f58401-fd62-4b6a-bf73-b6dcde64d9ad&_gl=1*1mlx6yv*_ga*NDI1NTcxNTI2LjE2Njg0MzU3MDI.*_ga_CW55HF8NVT*MTY4NTc1MDI2My4zOC4xLjE2ODU3NTA1MzcuMC4wLjA'
            alt='dan11'
          />
        </div> */}
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Nhập</div>
              {/* <div className='mt-4'>
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
              </div> */}
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
