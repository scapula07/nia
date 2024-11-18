import React from 'react'
import { BsGrid } from "react-icons/bs";
import { FaList } from "react-icons/fa";

export default function Sort() {
  return (
        <div className='w-full flex justify-between'>
              <div className='w-1/2 flex items-center space-x-10'>
                   <div className='flex space-x-2 items-center'>
                        <BsGrid
                           className=''
                        />
                      <p className='font-light text-lg'>Grid</p>
                   </div>
                   <div className='flex space-x-2 items-center'>
                       <FaList
                          className=''
                       />
                      <p className=' font-light text-lg'>List</p>
                   </div>
              </div>
             <div className='w-1/2 flex items-center space-x-8'>
                  <select className='border py-3 px-6 rounded-lg text-sm font-semibold text-slate-600'>
                      <option>Sort by</option>
                  </select>
                  <p className='font-semibold'>Showing 1-9 of 27 results</p>     
             </div>
        </div>
  )
}
