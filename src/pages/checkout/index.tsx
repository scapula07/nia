import Billing from '@/components/Checkout/billing'
import Order from '@/components/Checkout/order'
import React,{useState,useEffect} from 'react'
import { useRecoilValue } from 'recoil'
import { userStore } from '@/recoil'
import { db } from '@/firebase/config'
import {doc,setDoc,
  addDoc,collection,
  getDoc,getDocs,
  query, where,updateDoc,orderBy,onSnapshot} from "firebase/firestore"

export default function Checkout() {
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

  return (
    <div className='pt-10 px-10'>
        <h5 className='font-bold text-2xl'>Checkout </h5>
        <div className='w-full flex space-x-10 py-6'>
            <div className='w-3/5'>
                <Order  cart={cart} customer={customer} setCustomer={setCustomer}/>
            </div>
           <div className='w-[28%]'>
                <Billing  cart={cart} currentUser={currentUser} customer={customer} />
           </div>
           
        </div>
    </div>
  )
}
