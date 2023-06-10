import { RegisterOptions, UseFormRegister } from 'react-hook-form'
import { InputHTMLAttributes } from 'react'
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  //type: React.HTMLInputTypeAttribute
  errorMessage?: string
  //placeholder?: string
  classNameInput?: string
  classNameError?: string
  //name: string
  register?: UseFormRegister<any>
  rule?: RegisterOptions
  //autoComplete?: string
}

export default function Input({
  type,
  errorMessage,
  placeholder,
  className,
  name,
  register,
  rule,
  autoComplete,
  classNameInput = 'w-full rounded-sm border border-gray-300 p-4 outline-none focus:border-gray-500 focus:shadow-sm ',
  classNameError = 'mt-1 min-h-[1.25rem] text-sm text-red-500'
}: Props) {
  const registerResult = register && name ? register(name, rule) : {}
  return (
    <div className={className}>
      <input
        type={type}
        // name='email'
        className={classNameInput}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...registerResult}
      />
      <div className={classNameError}> {errorMessage}</div>
    </div>
  )
}
