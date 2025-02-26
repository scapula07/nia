import { orderApi } from '@/lib/api/order.api'
import React from 'react'

export default function Product({item}:any) {
      console.log(item,"ii")
    return (
      <div className='flex flex-col md:flex-row w-full bg-white rounded-xl shadow-lg px-4 space-y-4 md:space-x-6 md:space-y-0 h-auto md:h-28 py-4'>
          <div className='flex flex-col md:flex-row items-center md:items-start w-full md:w-3/4 space-y-4 md:space-x-4'>
                <img 
                    src={item.product.image}
                    className="w-20 h-20"
                />
              <div className='flex flex-col items-center md:items-start w-full'>
                 <h5 className='font-bold text-lg'>{item.product.productName}</h5>
                 <p className='text-sm text-center md:text-left'>{item.product.description}.</p>     
              </div>
          </div>
          
         <div className='flex flex-col md:flex-row items-center md:items-start w-full justify-between px-4 space-y-2 md:space-y-0'>
              <div className='flex flex-col items-center md:items-start'>
                 <h5>Price:</h5>
                 <h5>${item.product.price}</h5>
              </div>
              <div className='flex flex-col items-center md:items-start'>
                 <h5>Quantity:</h5>
                 <h5>{item.product.qty}</h5>
              </div>
              <div className='flex flex-col items-center md:items-start'>
                 <h5>Summary:</h5>
                 <h5>${item.product.qty * item.product.price}</h5>
              </div>
              {item?.offerDeal &&
                  <button className='bg-[#009E4D] h-8 text-xs text-white px-6 rounded-full'>Group Buying</button>
              }
          </div>
      </div>
    )
  }

