import { useQuery } from '@tanstack/react-query'
import DOMPurify from 'dompurify'
import { useParams } from 'react-router-dom'
import productapi from 'src/apis/product.api'
import InputNumber from 'src/components/InputNumber'

import ProductRating from 'src/components/ProductRating'
import { formatCurrency, formatNumbertosocalStyle, rateSale } from 'src/utils/untils'

export default function ProductDetail() {
  const { id } = useParams()
  const { data: productDetailData } = useQuery({
    queryKey: ['product', id],
    queryFn: () => productapi.getProductDetail(id as string)
  })
  const product = productDetailData?.data.data
  if (!product) return null
  return (
    <div className='bg-gray-200 py-6'>
      <div className='bg-white p-4 shadow'>
        <div className='container'>
          <div className=' grid grid-cols-12 gap-9'>
            <div className='col-span-5'>
              <div className='relative w-full  pt-[100%] shadow'>
                <img
                  className='absolute left-0 top-0 h-full w-full bg-white object-cover'
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className='relative mt-4 grid grid-cols-5 gap-1'>
                <button className='text-ưhite absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                  </svg>
                </button>
                <button className='text-ưhite absolute right-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                  </svg>
                </button>
                {product.images.slice(0, 5).map((img, index) => {
                  const isActive = index === 0
                  return (
                    <div className='relative w-full  pt-[100%]' key={img}>
                      <img
                        className='absolute left-0 top-0 h-full w-full bg-white object-cover'
                        src={product.image}
                        alt={product.name}
                      />
                      {isActive && <div className='absolute inset-0 bordẻ-2 border-orange-50' />}
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='col-span-7'>
              <h1 className="text-xl font-medium uppercase">
                {product.name}
              </h1>
              <div className='mt-8 flex items-center '>
                <div className="flex items-center">
                  <span className='mr-1 border-b-orange-200 text-orange-200'>
                    {product.rating}
                  </span>
                  <ProductRating rating={product.rating} activeClassname='fill-orange-500 text-orange-500 h-4 w-4 ' nonActiveClassname='fill-gray-300 text-gray-300 h-4 w-4' />
                </div>
                <div className="mx-4 h-4 w-[1px] bg-gray-300">

                </div>
                <div>
                  <span>{formatNumbertosocalStyle(product.sold)}</span>
                  <span className='ml-1 text-gray-500'> Đã bán</span>
                </div>
              </div>
              <div className="mt-8 flex items-center bg-gray-50 px-5 py-4">
                <div className="text-gray-500 line-through">
                  ₫{formatCurrency(product.price_before_discount)}

                </div>
                <div className="ml-3 text-2xl font-medium text-orange-500">₫{formatCurrency(product.price)}</div>
                <div className='ml-4 rounded-sm bg-orange-500 px-1 py-[2px] text-sm font-semibold uppercase text-white'>
                  {rateSale(product.price_before_discount, product.price)} Giảm
                </div>
              </div>
              <div className='mt-8 flex items-center  '>
              <div className='capitalize text-gray-500'>
                số lượng
              </div>
              <div className='ml-10 flex items-center'>
                <button className='flex h-8 w-8 items-center justify-center rounded-sm border-gray-300 text-gray-500'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                  </svg>

                </button>
                <InputNumber
                value={1}
                className=''
                classNameError='hidden'
                classNameInput='h-8 w-14 border-t border-b border-gray-300 p-1 text-center ouline-none'
                />
 <button className='flex h-8 w-8 items-center justify-center rounded-r-sm border-gray-300 text-gray-500'>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
</svg>


                </button>
              </div>
            <div className="ml-6 text-sm text-gray-500">
              {product.quantity} sản phẩm có sẵn
            </div>
            </div>
            <div className='mt-8 flex items-center'>
                <button
              
                  className='flex h-12 items-center justify-center rounded-sm border border-orange bg-orange-500 px-5 capitalize text-orange shadow-sm hover:bg-orange-400'
                >
                  <svg
                    enableBackground='new 0 0 15 15'
                    viewBox='0 0 15 15'
                    x={0}
                    y={0}
                    className='mr-[10px] h-5 w-5 fill-current stroke-orange text-orange'
                  >
                    <g>
                      <g>
                        <polyline
                          fill='none'
                          points='.5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeMiterlimit={10}
                        />
                        <circle cx={6} cy='13.5' r={1} stroke='none' />
                        <circle cx='11.5' cy='13.5' r={1} stroke='none' />
                      </g>
                      <line fill='none' strokeLinecap='round' strokeMiterlimit={10} x1='7.5' x2='10.5' y1={7} y2={7} />
                      <line fill='none' strokeLinecap='round' strokeMiterlimit={10} x1={9} x2={9} y1='8.5' y2='5.5' />
                    </g>
                  </svg>
                  Thêm vào giỏ hàng
                </button>
                <button
                
                  className='fkex ml-4 h-12 min-w-[5rem] items-center justify-center rounded-sm bg-orange px-5 capitalize text-white shadow-sm outline-none bg-orange-500 hover:bg-orange-400'
                >
                  Mua ngay
                </button>
              </div>
            </div>
         
          </div>
        </div>
        <div className='mt-8'>
        <div className='container'>
          <div className=' bg-white p-4 shadow'>
            <div className='rounded bg-gray-50 p-4 text-lg capitalize text-slate-700'>Mô tả sản phẩm</div>
            <div className='mx-4 mt-12 mb-4 text-sm leading-loose'>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(product.description)
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className='mt-8'>
        <div className='container'>
          <div className='uppercase text-gray-400'>CÓ THỂ BẠN CŨNG THÍCH</div>
          {productsData && (
            <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
              {productsData.data.data.products.map((product) => (
                <div className='col-span-1' key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div> */}
      </div>
    </div>
  )
}
