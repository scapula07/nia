import Billing from '@/components/Checkout/billing'
import Order from '@/components/Checkout/order'
import React from 'react'

export default function Checkout() {
  return (
    <div className='pt-10 px-10'>
        <h5 className='font-bold text-2xl'>Checkout </h5>
        <div className='w-full flex space-x-10 py-6'>
            <div className='w-3/5'>
                <Order />
            </div>
           <div className='w-[32%]'>
                <Billing />
           </div>
           
        </div>
    </div>
  )
}
