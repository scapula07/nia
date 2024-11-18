import React from 'react'
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function Header() {
  return (
    <div className='w-full fixed flex py-4 px-20 bg-white'>
          <div className='flex w-1/2 items-center space-x-20'>
               <img 
                 src='/logo.png'
                 className='w-20 h-20'
                />

              <div className='border py-4 px-3 rounded-lg flex w-1/2 justify-between items-center'>
                <input
                    placeholder='Search products or categories'
                    className='outline-none border-0 w-full text-xs text-black'
                    /> 
                    <FiSearch
                        className='text-slate-600'
                    />   
                </div> 
          </div>

          <div className='flex w-1/2 justify-between'>
                <div className='w-1/2 flex items-center space-x-4'>
                      <p>Home</p>
                      <p>Shop</p>
                      <p>Contact Us</p>

                </div>
                <div className='flex  items-center space-x-4'>
                    <IoNotificationsOutline 
                       className='text-3xl'
                     />
                    <AiOutlineShoppingCart 
                       className='text-3xl'
                     />
               </div>

        </div>
    </div>
  )
}
