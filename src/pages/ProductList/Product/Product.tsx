import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to='/'>
      <div className='rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.0625rem] hover:shadow-sm'>
        <div className='relative w-full pt-[100%]'>
          <img
            className='absolute left-0 top-0 h-full w-full bg-white object-cover'
            src='https://down-vn.img.susercontent.com/file/vn-11134201-23020-4xhvskpf7ynvf2_tn'
            alt='anh1'
          />
        </div>
        <div className='overflow-hidden p-2'>
          <div className='min-h-[1.75rem] text-sm line-clamp-2'>
            Bộ phụ kiện bảo vệ cáp và củ sạc bằng silicon nhân vật hoạt hình dễ thương cho bộ sạc 18W và 20W Date84store
          </div>
          <div className='mt-3 flex items-center '>
            <div className='max-w-[50%] text-gray-500 line-through'>
              <span className='text-xs'>₫</span>
              <span className='text-xs'>78.000</span>
            </div>
            <div className='ml-1 truncate text-orange-300'>
              <span className='text-xs'>₫</span>
              <span className='text-xs'>46.900</span>
            </div>
          </div>
        </div>
        <div className='mt-3 flex items-center justify-end'>
          <div className='flex items-center '>
            <div className='relative'>
              <div className='absolute left-0 top-0 h-full overflow-hidden' style={{ width: '50%' }}>
                <svg
                  enableBackground='new 0 0 15 15'
                  viewBox='0 0 15 15'
                  x={0}
                  y={0}
                  className='h-3 w-3 fill-yellow-300 text-yellow-300 '
                >
                  <polygon
                    points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeMiterlimit={10}
                  />
                </svg>
              </div>
              <svg
                enableBackground='new 0 0 15 15'
                viewBox='0 0 15 15'
                x={0}
                y={0}
                className='tex h-3 w-3 fill-current'
              >
                <polygon
                  points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeMiterlimit={10}
                />
              </svg>
            </div>
          </div>
          <div className="ml-2 text-sm">
            <span className='ml-1'> Đã bán 1.4k</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
