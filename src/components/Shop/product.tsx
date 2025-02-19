import React,{useState} from 'react'
import { MdOutlineStar,MdOutlineShoppingCart  } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { productApi } from '@/lib/api/product.api';
import { ClipLoader } from 'react-spinners';
import { userStore } from '@/recoil';
import { useRecoilState, useRecoilValue } from 'recoil';
import Link from 'next/link';


export default function Product({product}:any) { 

    const [loader,setLoader]=useState(false)
    const currentUser=useRecoilValue(userStore)
    
    const addTocart=async()=>{
        setLoader(true)
        try{
            const res=await productApi.addToCart(product,currentUser,1,"")
            res&&setLoader(false)
          }catch(e){
          console.log(e)
          setLoader(false)
        }
     }
    return(
        <div className='flex flex-col w-full space-y-4'>
              <Link 
                href={{
                pathname: `/product/2`,
                query:{id:product?.id},
                }}
                  
              >
                    <div className='relative h-60 w-full'>
                        
                                <img 
                                    src={product?.image}
                                    className="w-full h-full rounded-lg"
                                />
                    
                            <div className='absolute top-0 z-30 w-full px-4 py-2 h-full'>
                                <div className='flex justify-between'>
                                    <h5 className='bg-white rounded-full h-8 w-8 flex items-center justify-center'>
                                        <FaRegHeart className='text-red-500 text-xl'/>
                                    </h5>

                                </div>
                            </div>

                        </div>
                </Link>

                <div className='w-full'>             
                        <div className='flex flex-col '>         
                                <h5 className='text-gray-600 text-lg' >{product.productName}</h5>         
                                <h5 className='text-slate-800 text-2xl h-9 font-bold'>${product.price}</h5>
                               
                        </div>
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
                 </div>
        </div>
    )
}
