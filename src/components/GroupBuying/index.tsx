import React from 'react'
import { IoMdClose } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
export default function GroupBuying({onClose}:any) {
  return (
    <div className='bg-white w-full flex flex-col py-4 rounded-lg space-y-4'>
        <div className='w-full flex justify-end px-6'>
           <IoMdClose className='text-3xl' onClick={()=>onClose(false)} />
        </div>

        <div className='flex flex-col items-center space-y-4 w-full px-6'>
             <h5 className='text-2xl font-bold text-[#D41A1F]'>Group Buying Offer</h5>
             <p className='text-sm='>Buy <span className='font-bold'>25 gallons</span> of <span className='font-bold'>Prairie Farms Fresh Milk</span> together with Friends and Family or other members of your community. Each one gets 15% discount on their order. Get 20% Off if group goal is achieved in 24 hours. </p>
     
        </div>
        <div className='border-b border-t py-4 px-6 '>
            <div className='flex items-center justify-between'>
                 <h5 className='text-[#009E4D] text-lg'>How Group Buying works?</h5>
                 <MdArrowForwardIos className='text-xl' />
            </div>

        </div>

        <div className='flex flex-col w-full py-4 px-6'>
                <button className='py-2 bg-[#009E4D] px-4 rounded-sm w-full text-white'>Checkout with Group Buying</button>

      </div>
        

    </div>
  )
}
