import React from 'react'

export default function ProductDisplay({product}:any) {
  return (
    <div className='w-full flex flex-col space-y-6'>
          <div className='w-full'>
                <img 
                  src={product.image}
                  className='w-full h-96'
               />
          </div>
          {/* <div className='w-full flex items-center px-8 space-x-3'>
             {[
                '/p5.png',
                '/p6.png',
                '/p1.png'

               ].map((image, index)=>{
                return(
                    <img 
                      src={image}
                      key={index}
                      className="w-44  h-44"
                    />
                )
               })

             }
          </div> */}

    </div>
  )
}
