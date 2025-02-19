import React,{useState} from 'react'
import { BsDash } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import {MdOutlineShoppingCart  } from "react-icons/md";
import { productApi } from '@/lib/api/product.api';
import { useRecoilValue } from 'recoil';
import { userStore } from '@/recoil';
import { ClipLoader } from 'react-spinners';
import Modal from '../modal';
import GroupBuying from '../GroupBuying';
import { useRouter } from 'next/router';

export default function Details({product}:any) {

  const [loader,setLoader]=useState(false)
  const currentUser=useRecoilValue(userStore)
  const [qty,setQty]=useState<number>(1)
  const [trigger,setTrigger]=useState(false)

  const router = useRouter();

  const addTocart=async(offerId:string)=>{
      setLoader(true)
      try{
          const res=await productApi.addToCart(product,currentUser,qty,offerId)
          res&&setLoader(false)
        }catch(e){
        console.log(e)
        setLoader(false)
      }
   }

   const increment=()=>{
    setQty(qty+1)
   }

   const decrement=()=>{
    setQty(qty-1)
   }

   const goTobuyNow=async()=>{
      try{
         const res=await productApi.addToCart(product,currentUser,qty,"")
         router.push({
          pathname: '/checkout',
        });
    
       }catch(e){
         console.log(e)
       }
   }

  return (
    <>
    <div className='w-full flex flex-col space-y-4 md:space-y-6'>
          <div className='w-full flex flex-col space-y-3'>
              <h5 className='text-[20px] md:text-[24px] text-gray-600'>{product?.categories}</h5>
              <h5 className='font-bold text-[28px] md:text-[34px]'>{product.productName}</h5>

              <div className='flex flex-col py-4 space-y-4 md:space-y-6'>
                  <h5 className='text-[28px] md:text-[32px] font-[700]'>${product?.price}</h5>
                  <p className='leading-1 text-[16px] md:text-[20px]'>{product?.description}</p>
                   
                   <div className='flex flex-col space-y-1'>
                            <h5>Quantity</h5>    
                                   <div className='flex items-center space-x-3 md:space-x-5 border-2 border-black px-2 md:px-4 rounded-xl w-full md:w-56 justify-center' >
                                            <BsDash
                                                className='text-xl md:text-2xl font-bold '
                                                onClick={()=>qty !=1&&decrement()}
                                            />
                                            <input 
                                                className='h-8 md:h-10 w-16 md:w-20 text-center rounded-sm text-lg border-0 px-2 md:px-3 text-center bg-white'
                                                value={qty}
                                                readOnly
                                            />
                                            <IoMdAdd
                                                className='text-xl md:text-2xl font-bold '
                                                onClick={increment}
                                            />

                                    </div>
                            

                     </div>

                     <div className='flex flex-col w-full md:w-1/2 space-y-4 items-center'>    
                          {loader?
                                <button 
                                  className='text-white py-2 space-x-4 px-4 bg-[#d41a1e] rounded-lg flex justify-center items-center w-full text-sm'
                                  >
                                  <ClipLoader 
                                      color={"white"}
                                      size="12"
                                  />
                                  </button>
                                  :
                                <button 
                                  className='text-white py-2 space-x-4 px-4 bg-[#d41a1e] rounded-lg flex justify-center items-center w-full text-sm'
                                  onClick={()=>addTocart("")}
                                  >
                                      <MdOutlineShoppingCart 
                                      className='text-xl' 
                                      />
                                      <span>Add to cart</span>
                                </button>
                             }
                         <button
                          className='text-[#d41a1e] py-2 space-x-4 px-4 border-[#d41a1e] border rounded-lg flex justify-center items-center w-full text-sm'
                           onClick={goTobuyNow}
                          >           
                            Buy now
                         </button>

                         <button
                            className='text-white py-3 space-x-4 px-4 bg-green-600 rounded-full flex justify-center items-center  text-sm font-semibbold w-full md:w-56'
                            onClick={()=>setTrigger(true)}
                            >        
                              Use Group Buying
                        </button>

                     </div>
          


              </div>

          </div>

    </div>
      <Modal trigger={trigger}  cname="w-full md:w-[40%] py-2 h-96  px-4 rounded-lg">
         <GroupBuying onClose={setTrigger} product={product} qty={qty} addTocart={addTocart}/>
     </Modal>
    </>
  )
}
