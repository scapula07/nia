import React,{useState} from 'react'
import { orderApi } from '@/lib/api/order.api'
import { ClipLoader } from 'react-spinners'
import { useRouter } from "next/router";

export default function Billing({cart,currentUser,customer}:any) {
     const [loading,setLoading]=useState(false)
     const [errorMsg, setErrorMsg] = useState(null)

     const { replace } = useRouter()

     const create=async()=>{
        setLoading(true)
        setErrorMsg(null)
     
      // if (delivery?.city?.length < 3) {
      //   setErrorMsg(' City is required! ');
      //   setAlert({color:"danger",text:"City is required!"})
      //   setLoader(false)
      
      //   return;
      // }
      try{
          const res=await orderApi.create(cart,currentUser,customer)
          setLoading(false)
          res&& replace('share/12244r4')
       }catch(e){
          console.log(e)
          setLoading(false)
       }
    }
  return (
    <div className='w-full bg-[#f3f3f3] px-6 space-y-6 py-6 rounded-lg'>
         <h5 className='font-bold text-xl'>Billing Details</h5>
         <div className='flex flex-col space-y-2'>
            <h5 className='text-lg font-bold text-gray-600'>Item Total</h5>
            <div className='flex items-center justify-between py-3'>
                <h5 className='font-bold text-red-500 text-xl'>{cart?.length} Product</h5>
                <h5 className='font-bold text-red-500 text-lg'>$350</h5>

            </div>
            <h5 className='text-lg font-bold text-gray-600'>Shipping</h5>
            <div className='flex items-center justify-between'>
                <h5 className=' '>Free shipping</h5>
                <h5 className='font-bold text-green-500 text-xl'>${0.0}</h5>

            </div>
  
         </div>

         <div className='w-full flex flex-col'>
                    <div className='flex items-center justify-between py-3'>
                        <h5 className=' text-lg'>Subtotal</h5>
                        <h5 className='font-bold text-red-500 text-xl'>${350}</h5>

                </div>
                <div className='flex items-center justify-between py-7'>
                        <h5 className=' text-lg'>Total price:</h5>
                        <h5 className='font-bold text-xl'>$350</h5>
                </div>

                <button
                     className='text-white py-3 space-x-4 px-4 bg-[#d41a1e] rounded-xl flex justify-center items-center w-full text-lg font-bold'
                     onClick={create}
                  > 
                     {
                      loading?
                       <ClipLoader size={12} color="white"/>
                       :
                       "Pay"
                     }              
              </button>


         </div>

    </div>
  )
}
