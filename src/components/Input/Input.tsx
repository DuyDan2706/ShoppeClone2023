import React from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'


interface Props{
type:React.HTMLInputTypeAttribute
errorMessage?:string
placeholder?:string
className?:string
name:string
register:UseFormRegister<any>,
rule?:RegisterOptions
autoComplete?:string
}


export default function Input({type,errorMessage,placeholder,className,name,register,rule, autoComplete}:Props) {
  return (
    <div className={className}>
    <input
      type={type}
      // name='email'
      className='w-full rounded-sm border border-gray-300 p-4 outline-none focus:border-gray-500 focus:shadow-sm '
      placeholder={placeholder}
      autoComplete= {autoComplete}
      {...register(name, rule)}
    />
    <div className='mt-1 min-h-[1.25rem] text-sm text-red-500'> {errorMessage}</div>
  </div>
  )
}
