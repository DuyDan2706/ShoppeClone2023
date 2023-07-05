import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-neutral-100 py-16'>
      <div className='mx-auto max-w-7xl py-4'>
        <div className='grid-col-1 lg:grid-col-3 grid gap-4'>
          <div className='text-center lg:col-span-1'>
            <div> © 2023 Data20store. Tất cả các quyền được bảo lưu.</div>
            <div className='lg:col-span-2'>
              <div></div>
            </div>
          </div>
        </div>
        <div className='mt-10 text-center text-sm'>
          <div className=' text-2xl'>data20store</div>
          <div className='mt-2'>
            Địa chỉ: Lô b, Cư xá Thanh Đa, Quận Bình thạnh, Thành Phố Hồ chí Minh - Email: Data20store@gmail.com.vn
          </div>
          <div className='mt-2'>Chịu Trách Nhiệm Quản Lý Nội Dung: Data20store - Điện thoại liên hệ: 0929.047.379</div>
          <Link to='https://www.tiktok.com/@data20store' className='mt-2 text-2xl'>
            tiktok: data20store
          </Link>
          <div className='mt-2'>© 2023 - Bản quyền thuộc về Data20store</div>
        </div>
      </div>
    </footer>
  )
}
