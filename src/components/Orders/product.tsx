import { orderApi } from '@/lib/api/order.api'
import React from 'react'

export default function Product({item}:any) {
      console.log(item,"ii")
    return (
      <div className='flex w-full bg-white rounded-xl shadow-lg px-4 space-x-6 h-28 py-4'>
          <div className='flex w-3/4 space-x-4'>
                <img 
                    src={item.product.image}
                    className="w-20 h-20"
                />
              <div className='flex flex-col w-full'>
                 <h5 className='font-bold text-lg'>{item.product.productName}</h5>
                 <p className='text-sm'>{item.product.description}.</p>     
              </div>
          </div>
          
         <div className='flex w-full justify-between px-4'>
              <div className='flex flex-col items-center'>
                 <h5>Price:</h5>
                 <h5>${item.product.price}</h5>
              </div>
              <div className='flex flex-col items-center'>
                 <h5>Quantity:</h5>
                 <h5>{item.product.qty}</h5>
              </div>
              <div className='flex flex-col items-center'>
                 <h5>Summary:</h5>
                 <h5>${item.product.qty * item.product.price}</h5>
              </div>
              {item?.offerDeal&&
                  <button className='bg-[#009E4D] h-8 text-xs text-white  px-6 rounded-full'>Group Buying</button>
              }
             
          
          </div>
      </div>
    )
  }

