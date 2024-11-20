import Link from 'next/link';
import React,{useEffect,useState} from 'react'
import { FiSearch } from "react-icons/fi";
import { useRouter } from 'next/router';
import Active from '@/components/Orders/active';
import Completed from '@/components/Orders/completed';
import Cancelled from '@/components/Orders/cancelled';


export default function Orders() {
    const [active,setActive]=useState<string | undefined | string[]>("")
    const router = useRouter();
    const {slug} =   router.query ;

    useEffect(() => {
      setActive(slug)
    }, [slug]);
  
  return (
    <div className='pt-10 px-10'>
         <h5 className='text-2xl font-semibold'>My Orders</h5>
         <div className='py-10 flex flex-col space-y-9'>
              
             <div className='border py-2.5 px-3 rounded-lg flex w-1/4 justify-between items-center'>
                  <input
                      placeholder='Search'
                      className='outline-none border-0 w-full text-xs text-black'
                    /> 
                    <FiSearch
                        className='text-slate-600'
                    />   
              </div>

             <div className='border rounded-lg flex items-center w-1/3 justify-between'>
                     {[{text:"Active",link:"active" },{text:"Completed",link:"completed"},{text:"Cancelled",link:"cancelled"}].map((item)=>{
                            const part =`${"/" +item?.link}`
                        return(
                            <>
                                {active ==="orders"?
                                        <Link href={`/orders/${item?.link}`}>
                                            <button className={`${"" ==item?.link?'rounded-lg py-3 bg-[#009E4D] px-6 text-white text-sm':'rounded-lg py-3 hover:bg-[#009E4D] px-6 text-black hover:text-white text-sm font-bold '}`}>{item?.text}</button>
                                        </Link>
                                        :
                                        <Link href={`/orders/${item?.link}`}>
                                        <button className={`${active ==item?.link?'rounded-lg py-3 bg-[#009E4D] px-6 text-white text-sm':'rounded-lg py-3 hover:bg-[#009E4D] px-6 text-black hover:text-white text-sm font-bold'}`}>{item?.text}</button>
                                    </Link>   
                                    } 
                                </>
                         )})}
                </div> 

               <div className='w-4/5'>
                    {slug=='active'&& <Active />}
                    {slug=='completed'&& <Completed />}
                    {slug=='cancelled'&& <Cancelled />}
               </div>
             

         </div>

    </div>
  )
}
