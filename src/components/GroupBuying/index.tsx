import React,{useEffect,useState} from 'react'
import { IoMdClose } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { doc,getDoc,setDoc , updateDoc,collection,addDoc,getDocs,query,where,onSnapshot}  from "firebase/firestore";
import { db } from '@/firebase/config';
import { ClipLoader } from 'react-spinners';
import { userStore } from '@/recoil';
import { useRecoilValue } from 'recoil';
import { offerApi } from '@/lib/api/offer.api';
import Slider from "react-slick";
import Link from 'next/link';

export default function GroupBuying({onClose,products,qty,addTocart}:any) {
  const [offers,setOffers]=useState<any>([])
  const [trigger,setTrigger]=useState(false)
  const [isLoading,setLoading]=useState(false)
  const currentUser=useRecoilValue(userStore)
 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  useEffect(()=>{
   if(products?.length >0){
    const productIds = products?.map((item:any)=> item.id);
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
    },[products])



    console.log(offers,"oo")
  return (
    <div className='bg-white w-full flex flex-col py-4 rounded-lg space-y-4 '>
        <div className='w-full flex justify-end px-6'>
           <IoMdClose className='text-3xl' onClick={()=>onClose(false)} />
        </div>

        <div className='flex flex-col items-center space-y-4 w-full px-6'>
             <h5 className='text-2xl font-bold text-[#D41A1F]'>Group Buying Offer</h5>
       

             {offers?.map((offer:any)=>{
                  const item=products.find((i:any)=>i.id===offer.productID)
                  console.log(item,"ii")
                return(
                  
                      <p className='text-[1rem]'>Buy <span className='font-bold'>{offer?.minQty} units</span> of <span className='font-bold'>{item?.productName}</span> together with Friends and Family or other members of your community. Each one gets {offer?.offeredDiscount}% discount on their order. </p>
            
                )})
             }


   
    
        </div>
        <div className='border-b border-t py-4 px-6 '>
            <div className='flex items-center justify-between'>
                 <h5 className='text-[#009E4D] text-lg'>How Group Buying works?</h5>
                 <MdArrowForwardIos className='text-xl' />
            </div>

        </div>

        <div className='flex flex-col w-full py-4 px-6'>
             <Link href={"/checkout~group~buying"}>
                <button className='py-2 bg-[#009E4D] px-4 rounded-sm w-full text-white'              
                 >
                  {isLoading?
                     <ClipLoader color='white' size={10}/>
                     :
                     "Checkout with Group Buying"
                  }        
                </button>
              </Link>
         </div>
    </div>
  )
}
