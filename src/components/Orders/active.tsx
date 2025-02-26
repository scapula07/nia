import React,{useEffect,useState} from 'react'
import Order from './order'
import { useRecoilValue } from 'recoil';
import { doc,getDoc,setDoc , updateDoc,collection,addDoc,query,onSnapshot,where,or, and}  from "firebase/firestore";
import { userStore } from '@/recoil';
import { db } from '@/firebase/config';


export default function Active() {
  const currentUser=useRecoilValue(userStore) as {id:""}
  const [orders,setOrders]=useState([])
  useEffect(()=>{
    if(currentUser?.id?.length >0){
      const q = query(collection(db, "orders"),and(
        or(where('customer', '==', currentUser?.id),
           where('customers',  "array-contains", currentUser?.id)
        ),
        where("status", "==", "active"))
      );
      
         const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const products:any = []
            querySnapshot.forEach((doc) => {
              products.push({ ...doc.data(), id: doc.id })

            });
            // products?.length===0 &&setContacts("No contact")
            // products?.length >0 &&setContacts("")
           setOrders(products)
        });
      }   
  },[currentUser])
  return (
    <div className='flex flex-col space-y-6'>
        {orders?.map((item)=>{
            return(
                <Order 
                   item={item}
                />
            )})
        }

    </div>
  )
}
