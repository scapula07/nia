import React,{useState,useEffect} from 'react'
import { orderApi } from '@/lib/api/order.api'
import { ClipLoader } from 'react-spinners'
import { useRouter } from "next/router";


export default function Billing({cart,currentUser,customer}:any) {
     const [loading,setLoading]=useState(false)
     const [errorMsg, setErrorMsg] = useState(null)
     const [total,setTotal]=useState<number>(0)

     const { replace } = useRouter()

     const processPayment=async()=>{
        setLoading(true)
        setErrorMsg(null)
      try{
          const id:any= await orderApi.create(cart,currentUser,customer)
          const res=await orderApi.checkout(cart,id)
          setLoading(false)
          res&&replace(res.url)
       }catch(e){
          console.log(e)
          setLoading(false)
       }
    }


    function calculateTotalPrice(products:any) {
      let totalPrice = 0;

      products.forEach((product:any)=> {
        const subtotal = parseFloat(product.price) * product.qty; 
        totalPrice += subtotal as number
      });
    
      return totalPrice.toFixed(2); 
   }

   useEffect(()=>{
      const totalPrice = calculateTotalPrice(cart);
       setTotal(Number(totalPrice))
    },[cart]) 
  return (
    <div className='w-full flex flex-col space-y-10'>
        <BillingSummary cart={cart} total={total}/>
        <OrderSummary cart={cart} processPayment={processPayment} loading={loading} total={total}/>

    </div>
  )
}



const BillingSummary=({cart,total}:any)=>{
    return(
        <div className='w-full bg-[#F3F3F3] px-8 space-y-4 py-6 rounded-lg'>
          <h5 className='font-[700] text-[20px]'>Billing Details</h5>
         <div className='flex flex-col space-y-1'>
            <h5 className='text-[18px] font-[600] text-[#5B5B5B]'>Item Total</h5>
            <div className='flex items-center justify-between py-3'>
                <h5 className='font-[600] text-[#E62F34] text-[18px]'>{cart?.length} Product</h5>
                <h5 className='font-[500] text-[#E62F34]  text-[28px]'>${total}</h5>

            </div>
            <h5 className='text-lg font-bold text-[#2D2D2D]'>Discount</h5>
             <div className='flex items-center justify-between'>
                <h5 className='text-[14px] text-[#5B5B5B]'>Group buying goal is to buy 25 gallons</h5>
               <h5 className='font-bold text-green-500 text-[14px]'>15% off</h5>

           </div>
           <div className='flex items-center justify-between'>
                <h5 className='text-[14px] text-[#5B5B5B]'>Achieve goal in 24 hours</h5>
               <h5 className='font-bold text-green-500 text-[14px]'>20% off</h5>
           </div>
         </div>

         <div className='w-full flex flex-col'>
                    <div className='flex items-center justify-between py-3'>
                        <h5 className=' text-lg'>End</h5>
                        <h5 className='font-bold text-red-500 text-xl'>18h : 47m : 36s</h5>

                </div>
                <div className='flex items-center justify-between py-7'>
                        <h5 className=' text-lg'>Total price:</h5>
                        <h5 className='font-bold text-xl'>${total}</h5>
                </div>
         </div>
        </div>
    )
}





const OrderSummary=({cart,processPayment,loading,total}:any)=>{
   return(
       <div className='w-full bg-[#F3F3F3] px-8 space-y-4 py-6 rounded-lg'>
         <h5 className='font-[700] text-[20px]'>Order Summary</h5>
        <div className='flex flex-col space-y-1'>
           <h5 className='text-[18px] font-[600] text-[#5B5B5B]'>Item Total</h5>
           <div className='flex items-center justify-between py-3'>
               <h5 className='font-[600] text-[#E62F34] text-[18px]'>{cart?.length} Product</h5>
               <h5 className='font-[500] text-[#E62F34]  text-[28px]'>${total}</h5>

           </div>
           <h5 className='text-[24px] font-[600] text-[#2D2D2D]'>Shipping</h5>
           <div className='flex items-center justify-between'>
               <h5 className=' '>Free shipping</h5>
               <h5 className='font-bold text-green-500 text-xl'>${0.0}</h5>
           </div>
        </div>

        <div className='w-full flex flex-col'>
               <div className='flex items-center justify-between py-7'>
                       <h5 className=' text-lg'>Total price:</h5>
                       <h5 className='font-bold text-[32px]'>${total}</h5>
               </div>

               <button
                    className='text-white py-3 space-x-4 px-4 bg-[#009E4D] rounded-xl flex justify-center items-center w-full text-lg font-bold'
                    onClick={processPayment}> 
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