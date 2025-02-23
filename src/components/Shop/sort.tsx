import React from 'react'
import { BsGrid } from "react-icons/bs";
import { FaList } from "react-icons/fa";

export default function Sort({count}:{count:number}) {
  return (
        <div className='w-full flex justify-between'>
 
             <div className='w-full flex items-center space-x-8 justify-end'>
             
                  <p className='font-semibold'>Showing 1-9 of {count} results</p>     
             </div>
        </div>
  )
}
