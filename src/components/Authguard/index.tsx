'use client'
import React,{ReactNode,useEffect} from 'react'
import { userStore } from '@/recoil';
import { useRecoilState } from 'recoil';
import {doc,onSnapshot} from "firebase/firestore"
import { db } from '@/firebase/config';


export default function AuthGuard({children}:{children:ReactNode}) {
    const [currentUser,setcurrentUser]=useRecoilState(userStore) 
    const user= globalThis?.localStorage?.getItem("user") as string
     useEffect( ()=>{ 
      setcurrentUser(JSON.parse(user))
      },[])
    useEffect( ()=>{ 
        setcurrentUser(JSON.parse(user))
      if(JSON.parse(user)?.id?.length >0){
         const unsub = onSnapshot(doc(db,"users",JSON.parse(user)?.id), (doc) => {   
           setcurrentUser({...doc.data(),id:doc?.id})
         });
        }
    },[user])

    console.log(currentUser,"user")
  return (
    <div className='w-full h-full'>
        {children}
    </div>
  )
}
