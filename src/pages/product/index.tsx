import React from 'react'
import ProductDisplay from '@/components/Product/productDisplay'
import Details from '@/components/Product/details'

export default function Product() {
  return (
    <div className='w-full pt-10 px-10'>
           <div className='w-full flex items-center space-x-4 text-black'>
               <h5>Home</h5>
               <span>/</span>
               <h5>Shop</h5>
               <span>/</span>
               <h5>Product</h5>
           </div>

           <div className='w-full py-4 flex space-x-10'>
                 <div className='w-1/2'>
                    <ProductDisplay />
                 </div>
                 <div className='w-1/2'>
                     <Details />          
                </div>
           </div>
    </div>
  )
}
