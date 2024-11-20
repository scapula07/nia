import React from 'react'
import { MdOutlineStar,MdOutlineShoppingCart  } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

export default function Product({img,title}:{img:string,title:string}) { 
    return(
        <div className='flex flex-col w-full space-y-4'>
             <div className='relative h-60 w-full'>
                  <img 
                      src={img}
                      className="w-full h-full rounded-lg"/>
                    <div className='absolute top-0 z-30 w-full px-4 py-2 h-full'>
                        <div className='flex justify-between'>
                             <h5 className='bg-white rounded-full h-8 w-8 flex items-center justify-center'>
                                <FaRegHeart className='text-red-500 text-xl'/>
                             </h5>

                         </div>
                    </div>

                </div>

                <div className='w-full'>             
                        <div className='flex flex-col '>         
                                <h5 className='text-gray-600 text-lg' >{title}</h5>         
                                <h5 className='text-slate-800 text-2xl h-9 font-bold'>$14.9</h5>
                               
                        </div>
                          <button 
                             className='text-white py-2.5 space-x-4 px-4 bg-[#d41a1e] rounded-lg flex justify-center items-center w-full text-sm'>
                                <MdOutlineShoppingCart 
                                className='text-xl' 
                                />
                                <span>Add to cart</span>
                          </button>
                 </div>
        </div>
    )
}
