import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

export default function Category({item}:{item:any}) {
  return (
    <div className='w-full '>
          <div className='flex w-full items-center justify-between border-b border-gray-400 py-2'>
              <h5 className='text-gray-600'>{item?.label}</h5>
              <IoIosArrowDown 
                 className='text-xl text-gray-600'
               />
          </div>
    </div>
  )
}
