'use client'
import React, { useEffect,useState } from 'react'
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import Product from './product';


export default function Order({item}:any) {
      const [dropDown,setDropDown]=useState(true)
  return (
    <div className='w-full bg-[#f3f3f3] flex flex-col space-y-4  py-4 rounded-xl px-4 sm:px-6'>
          <div className='w-full flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-2'>
               <h5 className='text-sm sm:text-base'>Order ID: <span className='font-bold'>NCJ6382</span></h5>
               <h5 className='text-sm sm:text-base'>Order Date:<span className='font-bold'>30-09-2024</span> </h5>
               <h5 className='text-sm sm:text-base'>Order Status:  <span className='bg-orange-600 text-white text-xs rounded-full px-2 py-1'>Order confirmed</span>  </h5>
               <button onClick={() => setDropDown(!dropDown)} className='text-green-600 text-3xl'>
                    {dropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
               </button>
          </div>
          {dropDown && <Product item={item}/>}
          {dropDown && <Details />}
    </div>
  )
}



const Details=()=>{
  return(
     <div>
         
     </div>
  )
}