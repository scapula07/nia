import React,{useEffect,useState} from 'react'
import { IoMdClose } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { doc,getDoc,setDoc , updateDoc,collection,addDoc,getDocs,query,where,onSnapshot}  from "firebase/firestore";
import { db } from '@/firebase/config';
import { ClipLoader } from 'react-spinners';
import { userStore } from '@/recoil';
import { useRecoilValue } from 'recoil';
import { offerApi } from '@/lib/api/offer.api';


export default function GroupBuying({onClose,product,qty,addTocart}:any) {
  const [offer,setOffer]=useState<any>({})
  const [trigger,setTrigger]=useState(false)
  const [isLoading,setLoading]=useState(false)
  const currentUser=useRecoilValue(userStore)

  useEffect(()=>{
   if(product?.id?.length != undefined){
          
    const q = query(collection(db, "offers"),where('productId',"==",product?.id));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setOffer({ ...doc.data(), id: doc.id })
       });
    });
     }
    },[product])

    const join=async()=>{
        setLoading(true)
      try{
             addTocart(offer?.id)
             const res=await offerApi.join(product,currentUser,offer,qty)
            res&&setLoading(false)
       }catch(e){
          console.log(e)
          setLoading(false)
       }
    }
  return (
    <div className='bg-white w-full flex flex-col py-4 rounded-lg space-y-4'>
        <div className='w-full flex justify-end px-6'>
           <IoMdClose className='text-3xl' onClick={()=>onClose(false)} />
        </div>

        <div className='flex flex-col items-center space-y-4 w-full px-6'>
             <h5 className='text-2xl font-bold text-[#D41A1F]'>Group Buying Offer</h5>
             <p className='text-sm='>Buy <span className='font-bold'>{offer?.minQty} units</span> of <span className='font-bold'>{product.brand}</span> together with Friends and Family or other members of your community. Each one gets {offer?.offeredDiscount}% discount on their order. </p>
     
        </div>
        <div className='border-b border-t py-4 px-6 '>
            <div className='flex items-center justify-between'>
                 <h5 className='text-[#009E4D] text-lg'>How Group Buying works?</h5>
                 <MdArrowForwardIos className='text-xl' />
            </div>

        </div>

        <div className='flex flex-col w-full py-4 px-6'>
                <button className='py-2 bg-[#009E4D] px-4 rounded-sm w-full text-white'
                   onClick={!isLoading?join:undefined}
                 >
                  {isLoading?
                     <ClipLoader color='white' size={10}/>
                     :
                     "Checkout with Group Buying"
                  }        
                </button>

         </div>
        

    </div>
  )
}
