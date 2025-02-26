'use client'
import React, { useEffect,useState } from 'react'
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import Product from './product';
import { doc,getDoc,setDoc , updateDoc,collection,addDoc,getDocs,query,where,onSnapshot}  from "firebase/firestore";
import { db } from '@/firebase/config';
import { useRecoilValue } from 'recoil';
import { userStore } from '@/recoil';

export default function Order({item}:any) {
      const [dropDown,setDropDown]=useState(false)
  return (
    <div className='w-full bg-[#f3f3f3] flex flex-col space-y-4  py-4 rounded-xl px-4 sm:px-6'>
          <div className='w-full flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-2'>
               <h5 className='text-sm sm:text-base'>Order ID: <span className='font-bold'>{item.orderID}</span></h5>
               <h5 className='text-sm sm:text-base'>Order Date:<span className='font-bold'>30-09-2024</span> </h5>
               {item?.status==="active"&&
                         <h5 className='text-sm sm:text-base'>
                              <span className='hidden sm:inline'>Order Status: </span>
                          <span className='bg-[#CC7914] text-white text-xs rounded-full px-2 py-1'>Order confirmed</span>  </h5>
                    }
                    {item?.status==="completed"&&
                         <h5 className='text-sm sm:text-base'>
                                   <span  className='hidden sm:inline'>Order Status: </span>:  <span className='bg-[#0B7B69] text-white text-xs rounded-full px-2 py-1'>Order Completed</span>  </h5>
                    }
                   {item?.status==="cancelled"&&
                         <h5 className='text-sm sm:text-base'>
                                   <span  className='hidden sm:inline'>Order Status: </span>:  <span className='bg-[#B6B6B6] text-white text-xs rounded-full px-2 py-1'>Order Cancelled</span>  </h5>
                    }
            {(item?.status==="active" || item?.status==="completed")&&          
               <button onClick={() => setDropDown(!dropDown)} className='text-green-600 text-3xl'>
                    {dropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
               </button>
           }
          </div>
          <Product item={item}/>
          {dropDown && <Details item={item}/>}
    </div>
  )
}



const Details=({item}:any)=>{
  const [offer,setOffer]=useState<any>()
  const [customer,setCustomer]=useState<any>()
  const currentUser=useRecoilValue(userStore) as {id:""}
  useEffect(()=>{
    if(item?.product.id?.length >0){
         
     const q = query(collection(db, "offers"),where('productID',"==", item.product.id));
     const unsubscribe = onSnapshot(q, (querySnapshot) => {
       querySnapshot.forEach((doc) => {
         querySnapshot.forEach((doc) => {
          setOffer({ ...doc.data(), id: doc.id })
         });
        });
     });
      }
     },[item])

     useEffect(()=>{
      if(currentUser?.id?.length >0){
           
        const unsub = onSnapshot(doc(db,"customers",currentUser?.id), (doc) => {   
          setCustomer({...doc.data(),id:doc?.id})
        });
        }
       },[item])
  return(
     <div className='w-full flex flex-col space-y-6'>
          <div className='w-full flex flex-col sm:flex-row space-x-0 sm:space-x-8'>
                 <div className='w-full sm:w-[40%] space-y-6'>
                     <h5 className='font-bold'>Details:</h5>
                     <div className='flex flex-col font-light text-[#2D2D2D] text-sm'>
                          <p>{customer?.name}</p>
                          <p>{customer?.phone}</p>
                          <p>{customer?.email}</p>
                          <p>{"4140 Parker Rd. Allentown, New Mexico 31134"}</p>
                     </div>

                     <div className='flex w-full justify-between items-center'>
                           <div className='flex flex-col'>
                               <h5>Item Total</h5>
                               <h5>{item.product.qty}({item.product.price})</h5>
                           </div>
                           
                              <h5>${item.product.price*item.product.qty}</h5>                
                    </div>


                    <div className='flex w-full justify-between items-center'>
                        <h5>Total Price </h5>
                           
                        <h5>${item.product.price*item.product.qty}</h5>                
                    </div>



                 </div>
                  {item.offerDeal&&(
                         <div className='w-full sm:w-1/2'>                            
                                <h5 className='font-bold'>Group Buying Offer</h5>
                                <p className='text-xs'>Buy {offer?.minQty} units of {item.product.productName} together with Friends and Family or other members of your community. Each one gets {offer?.offeredDiscount}% discount on their order. </p>
                   
                                <div className='flex flex-col  space-y-1  py-4 w-full'>
                                  <h5 className='font-bold'>Status</h5>
                                  <div className='w-full flex items-center space-x-3'>
                                      <progress value={item?.qty} max={offer?.totalUnits} className="w-full rounded-lg " style={{background:"red"}}></progress>
                                      <h5 className='font-bold'>({item?.qty}/{offer?.totalUnits})</h5>
                                  </div>
                                  <p className='text-sm'>You already bought {item?.product?.qty} gallons. The goal is {offer?.totalUnits} gallons. Invite more family, friends and community members to buy together. </p>

                             </div>
                         </div>
                   )}
          </div>
          {item.status==="active"&&
                   <div className='w-full flex items-center justify-center'>
                       <button className='border border-[#D41A1F] text-[#D41A1F] py-2 px-10 rounded-lg'>Cancel Your Order</button>          
                 </div>
          }

         
     </div>
  )
}