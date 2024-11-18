import React from 'react'

export default function Product() {
    return (
      <div className='flex w-full bg-white rounded-xl shadow-lg px-4 space-x-6 h-28 py-4'>
          <div className='flex w-3/4 space-x-4'>
                <img 
                    src={'/p1.png'}
                    className="w-20 h-20"
                />
              <div className='flex flex-col w-full'>
                 <h5 className='font-bold text-lg'>Prairie Farms Fresh Milk</h5>
                 <p className='text-sm'>Pure, farm-fresh whole milk packed with essential nutrients like calcium and vitamin D.</p>     
              </div>
          </div>
          
         <div className='flex w-full justify-between px-4'>
              <div className='flex flex-col items-center'>
                 <h5>Price:</h5>
                 <h5>$70</h5>
              </div>
              <div className='flex flex-col items-center'>
                 <h5>Quantity:</h5>
                 <h5>1</h5>
              </div>
              <div className='flex flex-col items-center'>
                 <h5>Summary:</h5>
                 <h5>$350</h5>
              </div>
          
          </div>
      </div>
    )
  }

