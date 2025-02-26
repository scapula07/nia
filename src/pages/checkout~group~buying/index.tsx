import Order from '@/components/groupCheckout/order'
import React,{useState,useEffect} from 'react'
import { useRecoilValue } from 'recoil'
import { userStore } from '@/recoil'
import { doc,getDoc,setDoc , updateDoc,collection,addDoc,getDocs,query,where,onSnapshot}  from "firebase/firestore";
import { db } from '@/firebase/config';import Billing from '@/components/groupCheckout/billing'

export default function Checkout() {
  const [offers,setOffers]=useState<any>([])
  const [cart,setCart]=useState<any[]>([])
  const [customer,setCustomer]=useState({})
  const currentUser=useRecoilValue(userStore) as {id:""}

  useEffect(()=>{
     if(currentUser?.id?.length >0){
        const ref =doc(db,"bucket",currentUser?.id)
        const unsub = onSnapshot(ref, (doc) => {
        setCart(doc?.data()?.cart)
        });
       }
   },[currentUser.id])



  useEffect(()=>{
    if(cart?.length >0){
     const productIds = cart?.map((item:any)=> item.id);
     console.log(productIds,"ids")
 
           
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
    <div className='pt-10 pb-20 px-4 md:px-20'>
        <h5 className='font-bold text-2xl'>Checkout </h5>
        <div className='w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 py-6'>
            <div className='w-full md:w-3/5'>
                <Order  cart={cart} customer={customer} setCustomer={setCustomer} offers={offers}/>
            </div>
           <div className='w-full md:w-[28%]'>
                <Billing  cart={cart} currentUser={currentUser} customer={customer} offers={offers}/>
           </div>
        </div>
    </div>
  )
}
