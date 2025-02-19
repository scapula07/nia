import { productApi } from '@/lib/api/product.api'
import React from 'react'

export default function Product({item}: any) {
  return (
    <div className='flex flex-col md:flex-row w-full bg-white rounded-xl shadow px-4 space-y-4 md:space-y-0 md:space-x-6 items-center py-4'>
      <img 
        src={item.image}
        className="w-20 h-20"
      />
      <div className='flex flex-col md:flex-row w-full justify-between'>
        <div className='flex flex-col space-y-3 w-full md:w-1/2'>
          <h5 className='text-[22px] text-[#444444] font-[700]'>{item.productName}</h5>
          <h5 className='text-[14px] text-[#5B5B5B]'>{item.description?.slice(0,100)}</h5>
        </div>

        <div className='flex flex-col items-center w-full md:w-[15%] space-y-8'>
          <h5 className='font-[400] text-[#5B5B5B]'>Price</h5>
          <h5>${item.price}</h5>
        </div>
        <div className='flex flex-col items-center w-full md:w-[20%] space-y-8'>
          <h5 className='font-[400] text-[#5B5B5B]'>Quantity</h5>
          <h5>{item.qty}</h5>
        </div>
      </div>
      <div className='flex flex-col items-center w-full md:w-[20%] space-y-8'>
        <h5 className='font-[400] text-[#5B5B5B]'>Summary</h5>
        <h5>${item.price}</h5>
      </div>
    </div>
  )
}
