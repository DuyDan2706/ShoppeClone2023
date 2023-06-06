import React from 'react'
import { useEffect, useState } from 'react'
import { useMatch } from 'react-router-dom'

export default function RegisterHeader() {
    const registerMatch= useMatch('/register')
    const isRegister = Boolean(registerMatch)
    console.log("registerMatch",registerMatch)
  return (
    <header className='py-5'>
      <div className='container'>
        <nav className='flex items-end'>
          <img
            className='h-14 lg:h-14'
            src='https://firebasestorage.googleapis.com/v0/b/subscriptionmilk.appspot.com/o/img%2FTD%20(2).png?alt=media&token=14f58401-fd62-4b6a-bf73-b6dcde64d9ad&_gl=1*1mlx6yv*_ga*NDI1NTcxNTI2LjE2Njg0MzU3MDI.*_ga_CW55HF8NVT*MTY4NTc1MDI2My4zOC4xLjE2ODU3NTA1MzcuMC4wLjA'
            alt='dan11'
          />

          <div className='log:text-2xl ml-5 text-4xl'>{isRegister ? 'Đăng Kí'  : 'Đăng Nhập'}</div>
        </nav>
      </div>
    </header>
  )
}
