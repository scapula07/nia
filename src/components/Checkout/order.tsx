import React from 'react'
import Details from './details'
import Product from './product'

export default function Order() {
  return (
    <div className='bg-[#f3f3f3] w-full rounded-lg px-6 py-4'>
        <h5 className='font-semibold text-xl'>Order #1</h5>
        <Details />
        <Product />

    </div>
  )
}
