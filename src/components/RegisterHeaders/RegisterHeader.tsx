import React from 'react'

export default function RegisterHeader() {
  return (
    <header className='py-5'>
      <div className='mx-auto max-w-7xl py-4'>
        <nav className='flex items-end'>
          <img
            className='h-8 lg:h-11'
            src='https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png'
            alt='dan11'
          />

          <div className='log:text-2xl ml-5 text-xl'>Đăng kí</div>
        </nav>
      </div>
    </header>
  )
}
