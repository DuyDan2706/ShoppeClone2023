import React from 'react'
import AsiderFIlter from './AsiderFIlter'
import SortProductList from './SortProductList'
import Product from './Product'
import { useQuery } from '@tanstack/react-query'
import useQueryParams from 'src/hooks/useQueryParams'
import productapi from 'src/apis/product.api'

export default function ProductList() {
 const queryParams =useQueryParams()

  const {data} = useQuery ({
    queryKey:['products',queryParams],
    queryFn : ()=>{
  return  productapi.getproduct(queryParams)
    }
  })
console.log("queryParams",data)

  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3'>
            <AsiderFIlter />
          </div>
          <div className='col-span-9'>
            <SortProductList />
            <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
              {Array(30)
                .fill(0)
                .map((_, index) => (
                  <div className='col-span-1' key={index}>
                    <Product />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
