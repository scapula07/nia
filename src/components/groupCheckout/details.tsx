import React from 'react'
import Select from 'react-select'


export default function Details({customer,setCustomer}:any) {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  
  return (
    <div className='w-full flex flex-col space-y-6 py-4'>
          <h5 className='font-bold text-2xl'>1. Shipping Details</h5>
          <div className='grid md:grid-cols-2  grid-cols-1 gap-4'>
               {[
                  {
                    label:'Enter your email address',
                    placeHolder:'chadjameson042@gmail.com',
                    change:(txt:string)=>setCustomer({...customer,email:txt})
                  },
                  {
                    label:'Enter your Full name ',
                    placeHolder:'Chad Jameson',
                    change:(txt:string)=>setCustomer({...customer,name:txt})
                  },
                  {
                    label:'Enter your address',
                    placeHolder:'Texas,USA',
                    change:(txt:string)=>setCustomer({...customer,address:txt})
                  },
                  {
                    label:'Enter your phone number',
                    placeHolder:'+1',
                    change:(txt:string)=>setCustomer({...customer,phone:txt})
                  },
                  
                  
                 ].map((item)=>{
                  return(
                    <div className='w-full flex flex-col space-y-3'>
                         <h5 className='text-sm font-semibold'>{item?.label}</h5>
                         <input 
                           className='border bg-[#f3f3f3] py-2 px-4 rounded-lg outline-none'
                           placeholder={item?.placeHolder}
                           onChange={(e)=>item.change(e.target.value)}
                         />

                    </div>
                  )
               })

               }

          </div>

          <div className='flex flex-col md:w-[60%] space-y-1'>
                <h5 className='text-sm font-semibold'>Select Pickup Location</h5>
                <Select options={options} />
                <h5 className='text-xs font-semibold text-[#009E4D]'>Your ordered items will be delivered at your selected pickup locations</h5>


          </div>

    </div>
  )
}
