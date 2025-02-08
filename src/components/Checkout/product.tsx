import { productApi } from '@/lib/api/product.api'
import React from 'react'

export default function Product({item}:any) {
  return (
    <div className='flex w-full bg-white rounded-xl shadow px-4 space-x-6 items-center h-28 py-4'>
         <img 
            src={item.image}
            className="w-20 h-20"
          />
      <div className='flex w-full justify-between'>
            <div className='flex w-1/2 justify-between'>
                <div className='flex flex-col space-y-3'>
                    <h5 className='text-lg text-slate-700 font-light'>{item.title}</h5>
                    <h5 className='text-sm text-slate-500 '>{item.desc}</h5>
                </div>

                <div className='flex flex-col items-center'>
                    <h5 className='font-semibold'>Price</h5>
                    <h5>${item.price}</h5>
                </div>
                <div className='flex flex-col items-center'>
                    <h5 className='font-semibold'>Quantity</h5>
                    <h5>{item.qty}</h5>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                    <h5 className='font-semibold'>Summary</h5>
                    <h5>${item.price}</h5>
             </div>
        </div>
    </div>
  )
}
