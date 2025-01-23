import React from 'react'
import Details from './details'
import Product from './product'

export default function Order({cart,customer,setCustomer}:any) {
  return (
    <div className='bg-[#f3f3f3] w-full rounded-lg px-6 py-4'>
        <h5 className='font-semibold text-xl'>Order #1</h5>
        <Details customer={customer} setCustomer={setCustomer}/>
        <div className='flex flex-col space-y-6'>
           <h5 className='font-bold text-2xl'>2. Order information</h5>
           {cart.map((item:any)=>{
             return(
                 <Product item={item}/>
                )
            }) }
        </div>
    
    </div>
  )
}
