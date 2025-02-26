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
    <div className='pt-10 px-4  sm:px-20'>
         <h5 className='text-lg sm:text-xl font-semibold'>My Orders</h5>
         <div className='py-4 sm:py-6 flex flex-col space-y-4 sm:space-y-6'>
              
             <div className='border py-2 px-3 rounded-lg flex w-full sm:w-1/4 justify-between items-center'>
                  <input
                      placeholder='Search'
                      className='outline-none border-0 w-full text-xs sm:text-sm text-black bg-white'
                    /> 
                    <FiSearch
                        className='text-slate-600'
                    />   
              </div>

             <div className='border rounded-lg flex flex-row items-center w-full md:w-1/3 justify-between space-x-2 sm:space-x-4'>
                     {[{text:"Active",link:"active" },{text:"Completed",link:"completed"},{text:"Cancelled",link:"cancelled"}].map((item)=>{
                            const part =`${"/" +item?.link}`
                        return(
                            <React.Fragment key={item.link}>
                                <Link href={`/orders/${item?.link}`}>
                                    <button className={`${active == item?.link ? 'rounded-lg py-2 sm:py-3 bg-[#009E4D] px-4 sm:px-6 text-white text-xs sm:text-sm' : 'rounded-lg py-2 sm:py-3 hover:bg-[#009E4D] px-4 sm:px-6 text-black hover:text-white text-xs sm:text-sm font-bold'}`}>
                                        {item?.text}
                                    </button>
                                </Link>
                            </React.Fragment>
                         )})}
                </div> 

               <div className='w-full'>
                    {slug=='active'&& <Active />}
                    {slug=='completed'&& <Completed />}
                    {slug=='cancelled'&& <Cancelled />}
               </div>
             

         </div>

    </div>
  )
}
