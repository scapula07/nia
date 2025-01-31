import React,{useState,useEffect} from 'react'
import ProductDisplay from '@/components/Product/productDisplay'
import Details from '@/components/Product/details'
import { useRouter } from 'next/router';
import { doc,getDoc,setDoc , updateDoc,collection,addDoc,getDocs,query,where,onSnapshot}  from "firebase/firestore";
import { db } from '@/firebase/config';
import Modal from '@/components/modal';

export default function Product() {
  const router = useRouter();
  const { id } = router.query; 
  const productId=id as string
  const [product,setProduct]=useState<any>({})
  const [trigger,setTrigger]=useState(false)

  useEffect(()=>{
   if(id?.length != undefined){
     const unsub = onSnapshot(doc(db,"products",productId), (doc) => {
       console.log(doc.data(),"daa")
   
       setProduct({...doc.data(),id:doc?.id})
      });
     }
    },[id])
  return (
    <div className='w-full pt-10 pb-20 px-20 h-full'>
           <div className='w-full flex items-center space-x-4 text-black'>
               <h5>Home</h5>
               <span>/</span>
               <h5>Shop</h5>
               <span>/</span>
               <h5>Product</h5>
           </div>

           <div className='w-full py-4 flex space-x-10'>
                 <div className='w-1/2'>
                    <ProductDisplay product={product}/>
                 </div>
                 <div className='w-1/2'>
                     <Details product={product} />          
                </div>
           </div>
    </div>
  )
}
