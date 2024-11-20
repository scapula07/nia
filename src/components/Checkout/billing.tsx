import React from 'react'

export default function Billing() {
  return (
    <div className='w-full bg-[#f3f3f3] px-6 space-y-6 py-6'>
         <h5 className='font-bold text-xl'>Billing Details</h5>
         <div className='flex flex-col space-y-2'>
            <h5 className='text-lg font-bold text-gray-600'>Item Total</h5>
            <div className='flex items-center justify-between py-3'>
                <h5 className='font-bold text-red-500 text-xl'>5(70)</h5>
                <h5 className='font-bold text-red-500 text-xl'>$350</h5>

            </div>
            <h5 className='text-lg font-bold text-gray-600'>Discount</h5>
            <div className='flex items-center justify-between'>
                <h5 className=' '>Group buying goal is to buy 25 gallons</h5>
                <h5 className='font-bold text-green-500 text-xl'>15% off</h5>

            </div>
            <div className='flex items-center justify-between'>
                <h5 className=''>Achieve goal in 24 hours</h5>
                <h5 className='text-green-500 text-xl'>20% off</h5>

            </div>


         </div>

         <div className='w-full flex flex-col'>
                <h5 className='text-lg font-bold text-gray-600'>End</h5>
                    <div className='flex items-center justify-between py-3'>
                        <h5 className=' text-lg'>This deal will end in</h5>
                        <h5 className='font-bold text-red-500 text-xl'>18h : 47m : 36s</h5>

                </div>
                <div className='flex items-center justify-between py-3'>
                        <h5 className=' text-lg'>Total price:</h5>
                        <h5 className='font-bold text-3xl'>$350</h5>

                </div>

                <button
                     className='text-white py-5 space-x-4 px-4 bg-[#d41a1e] rounded-xl flex justify-center items-center w-full text-xl font-bold'>        
                      
                   Pay
              </button>


         </div>

    </div>
  )
}
