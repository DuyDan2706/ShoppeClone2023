import React from 'react'
import { useEffect, useState } from 'react'
export default function RegisterHeader() {
  return (
    <header className='py-5'>
      <div className='container'>
        <nav className='flex items-end'>
          <img
            className='h-14 lg:h-14'
            src='https://firebasestorage.googleapis.com/v0/b/subscriptionmilk.appspot.com/o/img%2FTD%20(2).png?alt=media&token=14f58401-fd62-4b6a-bf73-b6dcde64d9ad&_gl=1*1mlx6yv*_ga*NDI1NTcxNTI2LjE2Njg0MzU3MDI.*_ga_CW55HF8NVT*MTY4NTc1MDI2My4zOC4xLjE2ODU3NTA1MzcuMC4wLjA.'
            alt='dan11'
          />

          <div className='log:text-2xl ml-5 text-4xl'>Đăng kí</div>
        </nav>
      </div>
    </header>
  )
}
