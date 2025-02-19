import React,{useEffect,useState} from 'react'
import Details from './details'
import Product from './product'
import { doc,getDoc,setDoc , updateDoc,collection,addDoc,getDocs,query,where,onSnapshot}  from "firebase/firestore";
import { db } from '@/firebase/config';
import { IoCloseSharp } from "react-icons/io5";

export default function Order({cart,customer,setCustomer}:any) {
  const [offers,setOffers]=useState<any>([])
  useEffect(()=>{
    if(cart?.length >0){
     const productIds = cart?.map((item:any)=> item.id);

 
           
     const q = query(collection(db, "offers"),where('productID','in', productIds));
     const unsubscribe = onSnapshot(q, (querySnapshot) => {
       querySnapshot.forEach((doc) => {
         const offerlist:any[] = []
         querySnapshot.forEach((doc) => {
           offerlist.push({ ...doc.data(), id: doc.id })
 
         });
          setOffers(offerlist)
        });
     });
      }
     },[cart])
  return (
    <div className='bg-[#f3f3f3] w-full rounded-lg px-6 py-4'>
        <h5 className='font-semibold text-xl'>Order</h5>
        <Details customer={customer} setCustomer={setCustomer}/>
        <div className='flex flex-col space-y-6'>
           <h5 className='font-bold text-2xl'>2. Order information</h5>
           {cart.map((item:any)=>{
             return(
                 <Product item={item}/>
                )
            }) }
        </div>

        <div className='py-10 w-full '>
              <h5 className='font-bold text-2xl'>3. Group Buying Offer</h5>
              <div className='flex flex-col w-full space-y-4 py-4' >
                  {offers?.map((offer:any)=>{
                          const item=cart.find((i:any)=>i.id===offer.productID)
                      return(
                        <div className='flex w-full space-x-4 items-center'>
                                 <div className='bg-white w-full shadow px-4 py-4 rounded-lg'>
                                    <p className='text-[1rem]'>Buy <span className='font-bold'>{offer?.minQty} units</span> of <span className='font-bold'>{item?.productName}</span> together with Friends and Family or other members of your community. Each one gets {offer?.offeredDiscount}% discount on their order. </p>
            
                                </div>
                                <div className='flex items-center justify-center p-4 bg-white shadow rounded-lg'>
                                    <IoCloseSharp className='text-2xl' />
                                </div>
                        </div>
                      )
                  })

                  }
              </div>

        </div>

   
    
    </div>
  )
}
