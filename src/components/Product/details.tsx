import React,{useState} from 'react'
import { BsDash } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineStar,MdOutlineShoppingCart  } from "react-icons/md";
import { useRouter } from 'next/router';
import { productApi } from '@/lib/api/product.api';
import { useRecoilValue } from 'recoil';
import { userStore } from '@/recoil';
import { ClipLoader } from 'react-spinners';
export default function Details({product}:any) {
  const router = useRouter();
  const [loader,setLoader]=useState(false)
  const currentUser=useRecoilValue(userStore)
  
  const addTocart=async()=>{
      setLoader(true)
      try{
          const res=await productApi.addToCart(product,currentUser)
          res&&setLoader(false)
        }catch(e){
        console.log(e)
        setLoader(false)
      }
   }

  return (
    <div className='w-full  flex flex-col '>
          <div className='w-full flex flex-col space-y-3'>
              <h5 className='text-xl text-gray-600'>{product.title}</h5>
              <h5 className='font-bold text-lg'>Gallon of Fresh Milk</h5>

              <div className='flex flex-col py-4 space-y-3'>
                  <h5 className=''>${product.price}</h5>
                  <p className='leading-1'>Pure, farm-fresh whole milk packed with essential nutrients like calcium and vitamin D. Perfect for drinking, cooking, and baking, with a rich, creamy taste you'll love.</p>
                   
                   <div className='flex flex-col space-y-1'>
                            <h5>Quantity</h5>    
                                    <div className='flex items-center space-x-5 border-2 border-black px-4 rounded-xl w-56 justify-center' >
                                            <BsDash
                                                className='text-2xl font-bold '
                                            />
                                            <input 
                                                className='h-10 w-10 rounded-sm text-lg border-0 px-3 text-center bg-white'
                                                value={1}
                                            />
                                            <IoMdAdd
                                                className='text-2xl font-bold '
                                            />

                                    </div>
                            

                     </div>

                     <div className='flex flex-col w-1/2 space-y-4'>    
                          {loader?
                                <button 
                                  className='text-white py-2.5 space-x-4 px-4 bg-[#d41a1e] rounded-lg flex justify-center items-center w-full text-sm'
                                  >
                                  <ClipLoader 
                                      color={"white"}
                                      size="12"
                                  />
                                  </button>
                                  :
                                <button 
                                  className='text-white py-2.5 space-x-4 px-4 bg-[#d41a1e] rounded-lg flex justify-center items-center w-full text-sm'
                                  onClick={addTocart}
                                  >
                                      <MdOutlineShoppingCart 
                                      className='text-xl' 
                                      />
                                      <span>Add to cart</span>
                                </button>
                            }
                         <button
                          className='text-[#d41a1e] py-2.5 space-x-4 px-4 border-[#d41a1e] border rounded-lg flex justify-center items-center w-full text-sm'>        
                           
                            Buy now
                         </button>

                     </div>
          


              </div>

          </div>

    </div>
  )
}
