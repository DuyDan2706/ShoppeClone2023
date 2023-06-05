import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-orange-500 pb-5 pt-2 text-white'>
      <div className='container'>
        <div className='flex justify-end'>
          <div className='cursor-poiter flex items-center py-1 hover:text-gray-300'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
              />
            </svg>
            <span className=' mx-1'>Tiếng Việt</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
            </svg>
          </div>
          <div className='cursor-poiter flex items-center py-1 hover:text-gray-300'>
            <div className='flex-shink-0 ml-6 mr-2 h-6 w-6'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/subscriptionmilk.appspot.com/o/img%2FTD%20(2).png?alt=media&token=14f58401-fd62-4b6a-bf73-b6dcde64d9ad&_gl=1*191ikvn*_ga*NDI1NTcxNTI2LjE2Njg0MzU3MDI.*_ga_CW55HF8NVT*MTY4NTkzMDYzOC40MC4xLjE2ODU5MzA2NjEuMC4wLjA'
                alt='avartar'
                className='h-full w-full rounded-full object-cover'
              />
            </div>
            <div>data20store</div>
          </div>
        </div>
        <div className='mt-4 grid grid-cols-12 items-end gap-4'>
          <div className='col-span-2'>
            <img
              className='h-14 lg:h-14'
              src='https://firebasestorage.googleapis.com/v0/b/subscriptionmilk.appspot.com/o/img%2FTD%20(2).png?alt=media&token=14f58401-fd62-4b6a-bf73-b6dcde64d9ad&_gl=1*1mlx6yv*_ga*NDI1NTcxNTI2LjE2Njg0MzU3MDI.*_ga_CW55HF8NVT*MTY4NTc1MDI2My4zOC4xLjE2ODU3NTA1MzcuMC4wLjA'
              alt='dan111'
            />
          </div>
          <form className='col-span-9'>
            <div className='flex rounded-sm bg-white p-1'>
              <input
                type='text'
                name='Search'
                className='flex-grow border-none bg-transparent px-3 py-2 text-black outline-none'
                placeholder='Free Ship từ 100k'
              ></input>
              <button className='flex-shirk-0 bg-orange-500 px-6 py-2 py-2 hover:opacity-70'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  // eslint-disable-next-line react/no-unknown-property
                  className='h-6 w-6'
                >
                  <path
                    // eslint-disable-next-line react/no-unknown-property
                    stroke-linecap='round'
                    // eslint-disable-next-line react/no-unknown-property
                    stroke-linejoin='round'
                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                  />
                </svg>
              </button>
            </div>
          </form>
          <div className='col-span-1 ml-6 '>
            <Link to='/' className=''>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-10 w-10'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
