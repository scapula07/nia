import React from 'react'
import { IoIosLink } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import Link from 'next/link';
export default function Share() {
  return (
    <div className='w-full py-20 px-20 '>
          <div className='w-full'>
            <Link href={"/shop"}>
               <h5 className='underline'>Return to Homepage</h5>
            </Link>

          </div>

          <div className='w-full flex justify-center pt-20'>
               <div className='w-[60%] bg-[#F3F3F3] flex flex-col py-6 rounded-lg'>
                    <div className='flex flex-col items-center space-y-6'>
                         <h5 className='font-bold text-xl'>Thank You For Your Order!</h5>
                         <img 
                           src='/p1.png'
                           className='w-44 h-44'
                         />
                         <div className='flex flex-col space-y-3 py-4'>
                                    <h5 className='font-bold text-lg'>Share your Group Buying Link</h5>
                                    <div className='flex items-center space-x-3'>
                                        {[
                                            {img:"/link.png"},
                                            {img:"/wa.png"},
                                            {img:"/fb.png"},
                                            {img:"/x.png"},
                                            {img:"/mail.png"}
                                        ].map((i)=>{
                                            return(
                                                <img src={i.img} className="w-10 h-10"/>
                                            )
                                        })

                                        }

                                    </div>      
                         </div>


                         <div className='flex flex-col px-6 space-y-1'>
                              <h5 className='font-bold'>Group Buying Offer</h5>
                              <p className='text-sm'>Buy 25 gallons of Prairie Farms Fresh Milk together with Friends and Family or other members of your community. Each one gets 15% discount on their order. Get 20% Off if group goal is achieved in 24 hours. </p>

                         </div>

                         <div className='border-b border-t py-4 px-6 w-full'>
                                <div className='flex items-center justify-between w-full'>
                                    <h5 className='text-[#009E4D] text-lg'>How Group Buying works?</h5>
                                    <MdArrowForwardIos className='text-xl' />
                                </div>

                         </div>


                         <div className='flex flex-col px-6 space-y-1 border-b py-4 w-full'>
                              <h5 className='font-bold'>Status</h5>
                              <div className='w-full flex '>
                                  <progress value={40} max={100} className="w-full rounded-lg " style={{background:"red"}}></progress>
                              </div>
                              <p className='text-sm'>You already bought 5 gallons. The goal is 25 gallons. Invite more family, friends and community members to buy together. </p>

                         </div>


                         <div className=' px-6 space-y-1 border-b py-4'>
                              <h5 className='font-bold text-left'>Members</h5>
                              <h5></h5>
                          </div>

                          <div className='flex items-center w-full space-x-4 px-6'>
                              <Link href={"/orders/active"} className="w-1/2">
                                  <button className='w-full py-3 border border-[#009E4D] text-[#009E4D] rounded-lg '>Track Your Order</button>
                              </Link>
                      
                            <Link href={"/shop"} className="w-1/2"> 
                               <button className='w-full py-3 bg-[#009E4D] text-white rounded-lg'>Continue Shopping</button>
                             
                            </Link>
                          

                          </div>
                         



                    </div>
                    

               </div>

          </div>

    </div>
  )
}
