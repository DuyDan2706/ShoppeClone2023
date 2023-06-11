import React from 'react'

export default function SortProductList() {
  return (
    <div className=' bg-gray-300/40 px-3 py-4'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex flex-wrap items-center gap-2'>
          <div> sắp xếp theo</div>
          <button className='h-8 bg-orange-500 px-4 text-center text-sm capitalize  text-white'> Phổ biến</button>
          <button className='h-8 bg-white px-4 text-center text-sm capitalize text-black hover:bg-slate-100'>
            {' '}
            Mới nhất
          </button>
          <button className='h-8 bg-white px-4 text-center text-sm capitalize text-black hover:bg-slate-100'>
            {' '}
            Bán chạy
          </button>
          <select className='h-8 bg-white px-4 text-sm capitalize text-black outline-none hover:bg-slate-100' value=''>
            <option value='' disabled>
              Giá
            </option>
            <option value='price:asc'> Giá: Thấp đến cao</option>
            <option value='price:dsc'> Giá: Cao đến thấp</option>
          </select>
        </div>
        <div className='flex items-center'>
          <span className='text-orange-500'>1</span>
          <span>/2</span>
          <div className='ml-2'>
            <button className='h-8 cursor-not-allowed rounded-tl-sm bg-white/60 px-3 hover:bg-slate-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
              </svg>
            </button>
            <button className='h-8 cursor-not-allowed rounded-tl-sm bg-white/60 px-3 hover:bg-slate-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-3 w-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
