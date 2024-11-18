import React from 'react'

export default function Product() {
  return (
    <div className='flex w-full bg-white rounded-xl shadow px-4 space-x-6 h-28 py-4'>
         <img 
            src={'/p1.png'}
            className="w-20 h-20"
          />
      <div className='flex w-full justify-between'>
            <div className='flex flex-col'>
                <div className='flex flex-col space-y-3'>
                    <h5 className='text-lg text-slate-700 font-light'>{}</h5>
                    <h5 className='text-sm text-slate-500 '></h5>
                </div>

                <div className='flex items-center'>
                </div>
            </div>
      
 
           <div>

           </div>


        </div>
    </div>
  )
}
