'use client'
import React, { useEffect,useState } from 'react'
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import Product from './product';


export default function Order() {
      const [dropDown,setDropDown]=useState(true)
  return (
    <div className='w-full bg-[#f3f3f3] flex flex-col space-y-4  py-4 rounded-xl px-6 '>
          <div className='w-full flex items-center justify-between border-b pb-2'>
               <h5>Order ID: <span className='font-bold'>NCJ6382</span></h5>
               <h5>Order Date:<span className='font-bold'>30-09-2024</span> </h5>
               <h5>Order Status:  <span className='bg-orange-600 text-white text-xs rounded-full px-2 py-1'>Order confirmed</span>  </h5>
               {!dropDown?
                    <IoIosArrowDown 
                        className='text-green-600 text-3xl'
                     />
                         :
                     <IoIosArrowUp />
               }
               <IoIosArrowDown 
                  className='text-green-600 text-3xl'
               />

          </div>
          <Product />
          <Details />
    </div>
  )
}



const Details=()=>{
  return(
     <div>
         
     </div>
  )
}