import React from 'react'

export default function Details() {
  return (
    <div className='w-full flex flex-col space-y-6 py-4'>
          <h5 className='font-bold text-2xl'>1. Shipping Details</h5>
          <div className='grid grid-cols-2 gap-4'>
               {[
                  {
                    label:'Enter your email address',
                    placeHolder:'chadjameson042@gmail.com'
                  },
                  {
                    label:'Enter your Full name ',
                    placeHolder:'chadjameson042@gmail.com'
                  },
                  {
                    label:'Enter your address',
                    placeHolder:'chadjameson042@gmail.com'
                  },
                  {
                    label:'Enter your phone number',
                    placeHolder:'chadjameson042@gmail.com'
                  },
                  
                  
                 ].map((item)=>{
                  return(
                    <div className='w-full flex flex-col space-y-1'>
                         <h5 className='text-sm'>{item?.label}</h5>
                         <input 
                           className='border bg-[#f3f3f3] py-2 px-4 rounded-lg'
                           placeholder={item?.placeHolder}
                         />

                    </div>
                  )
               })

               }

          </div>

    </div>
  )
}
