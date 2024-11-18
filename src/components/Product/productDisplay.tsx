import React from 'react'

export default function ProductDisplay() {
  return (
    <div className='w-full flex flex-col space-y-6'>
          <div className='w-full'>
                <img 
                  src='/p4.png'
                  className='w-full h-96'
               />
          </div>
          <div className='w-full flex items-center px-8 space-x-3'>
             {[
                '/p5.png',
                '/p6.png',
                '/p1.png'

               ].map((image)=>{
                return(
                    <img 
                      src={image}
                      className="w-44  h-44"
                    />
                )
               })

             }
               

          </div>

    </div>
  )
}
