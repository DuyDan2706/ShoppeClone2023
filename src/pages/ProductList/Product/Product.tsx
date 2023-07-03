import React from 'react'
import { Link } from 'react-router-dom'
import ProductRating from 'src/components/ProductRating'
import { Product as Product_Type } from 'src/types/product.type'
import { formatCurrency, formatNumbertosocalStyle } from 'src/utils/untils'

interface Props {
  product :Product_Type
}
export default function Product({product}:Props) {
  return (
    <Link to='/'>
      <div className='rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.0625rem] hover:shadow-sm'>
        <div className='relative w-full pt-[100%]'>
          <img
            className='absolute left-0 top-0 h-full w-full bg-white object-cover'
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className='overflow-hidden p-2'>
          <div className='min-h-[1.75rem] text-sm line-clamp-2'>
          {product.name}
          </div>
          <div className='mt-3 flex items-center '>
            <div className='max-w-[50%] text-gray-500 line-through'>
              <span className='text-xs'>₫</span>
              <span className='text-xs'>{formatCurrency(product.price_before_discount)}</span>
            </div>
            <div className='ml-1 truncate text-orange-300'>
              <span className='text-xs'>₫</span>
              <span className='text-xs'>{formatCurrency(product.price)}</span>
            </div>
          </div>
        </div>
        <div className='mt-3 flex items-center justify-end'>
         <ProductRating rating={product.rating}
         />
          <div className="ml-2 text-sm">
            <span className='ml-1'> Đã bán {formatNumbertosocalStyle(product.sold)}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
