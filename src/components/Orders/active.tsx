import React from 'react'
import Order from './order'
export default function Active() {
  return (
    <div className='flex flex-col space-y-6'>
        {[1,2,3].map(()=>{
            return(
                <Order 
                />
            )})
        }

    </div>
  )
}
