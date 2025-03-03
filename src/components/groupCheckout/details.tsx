import React,{useEffect,useState} from 'react'
import Select from 'react-select'
import { MdCheckBoxOutlineBlank,MdCheckBox } from "react-icons/md";
import { ClipLoader } from 'react-spinners';
import { db } from '@/firebase/config'
import {doc,onSnapshot,getDoc} from "firebase/firestore"
import { useRecoilValue } from 'recoil';
import { userStore } from '@/recoil';
import { orderApi } from '@/lib/api/order.api';

export default function Details({customer,setCustomer}:any) {
   const [isLoading,setLoading]=useState(false)
   const [isEdit,setEdit]=useState(false)
   const currentUser=useRecoilValue(userStore) as {id:""}

  const options = [
    { value: "St. Anne's Catholic Church (2140 Westheimer Rd)", label:"St. Anne's Catholic Church (2140 Westheimer Rd)" },
    { value: "CVS Pharmacy #13644 (2351 Westheimer Rd, Houston, TX 77098)", label:"CVS Pharmacy #13644 (2351 Westheimer Rd, Houston, TX 77098)" },
    { value: "UPS Customer Center - Houston (2351 Westheimer Rd)", label:"UPS Customer Center - Houston (2351 Westheimer Rd)" },
    { value: "Walmart Supercenter - Heights (1801 Airline Dr)", label:"Walmart Supercenter - Heights (1801 Airline Dr)" },
    { value: "FedEx at Walgreens (105 West Rd)", label:" FedEx at Walgreens (105 West Rd)" },
    { value: "FedEx Office - Houston (2323 Westheimer Rd)", label:"FedEx Office - Houston (2323 Westheimer Rd)" },
    { value: "Houston Public Library - Central Library (500 McKinney St)", label:"Houston Public Library - Central Library (500 McKinney St)" },
    { value: "Houston ISD ¹ ²", label:"Houston ISD ¹ ²" }
  ]


  useEffect(()=>{
      checkCustomer(currentUser)
  },[currentUser.id])

  const saveCustomerInfo=async()=>{
        setLoading(true)
     try{
        const res= await orderApi.editCustomer(currentUser?.id,customer)
        res&&setEdit(true)
        setLoading(false)
      }catch(e){
        setLoading(false)
        console.log(e)
      }
  }

 const checkCustomer=async(currentUser:any)=>{
    if(currentUser?.id?.length >0){
        const ref =doc(db,"customers",currentUser?.id)
        const docSnap = await getDoc(ref);
        console.log(docSnap.exists())
        if(docSnap.exists()===false){
          console.log("exit")
           setEdit(false)
          return
         }else{
          setEdit(true)
          const unsub = onSnapshot(ref, (doc) => {
            setCustomer({...doc?.data(),id:doc.id})
           });
      }
     }
  }
  
  return (
    <div className='w-full flex flex-col space-y-3 py-4'>
          <h5 className='font-bold text-2xl'>1. Shipping Details</h5>
          {isEdit?
               <div className='w-full flex flex-col'>
                     <div className='w-full flex justify-end'>
                          <h5 className='font-semibold text-[#D41A1F]' onClick={()=>setEdit(false)}>Edit</h5>     
                     </div>
                     <p className='font-light text-[#2D2D2D] text-sm'>{customer.name}</p>
                     <p className='font-light text-[#2D2D2D] text-sm'>{customer.phone}</p>
                     <p className='font-light text-[#2D2D2D] text-sm'>{customer.email}</p>
                     <p className='font-light text-[#2D2D2D] text-sm'>{customer.address}</p>
               </div>
                : 
            <div className='w-full space-y-4'>
                <div className='grid md:grid-cols-2 gap-4'>
                            {[
                                {
                                  label:'Enter your email address',
                                  placeHolder:'chadjameson042@gmail.com',
                                  value:customer?.email,
                                  change:(txt:string)=>setCustomer({...customer,email:txt})
                                },
                                {
                                  label:'Enter your Full name ',
                                  placeHolder:'Chad Jameson',
                                  value:customer?.name,
                                  change:(txt:string)=>setCustomer({...customer,name:txt})
                                },
                                {
                                  label:'Enter your address',
                                  placeHolder:'Texas,USA',
                                  value:customer?.address,
                                  change:(txt:string)=>setCustomer({...customer,address:txt})
                                },
                                {
                                  label:'Enter your phone number',
                                  placeHolder:'+1',
                                  value:customer?.phone,
                                  change:(txt:string)=>setCustomer({...customer,phone:txt})
                                },
                                
                                
                              ].map((item)=>{
                                return(
                                  <div className='w-full flex flex-col space-y-3'>
                                      <h5 className='text-sm font-semibold'>{item?.label}</h5>
                                      <input 
                                        className='border bg-[#f3f3f3] py-2 px-4 rounded-lg outline text-sm'
                                        placeholder={item?.placeHolder}
                                        value={item.value}
                                        onChange={(e)=>item.change(e.target.value)}
                                      />

                                  </div>
                                )
                            })

                    }
          </div>

                <div className='flex flex-col md:w-[50%] space-y-1'>
                      <h5 className='text-sm font-semibold'>Select Pickup Location</h5>
                      <Select options={options} className="bg-[#f3f3f3]"/>   
                </div>
                    <h5 className='text-xs font-semibold text-[#009E4D]'>Your ordered items will be delivered at your selected pickup locations</h5>
                    <div className='flex items-center space-x-3'>
                         {!isLoading?
                             <MdCheckBoxOutlineBlank className='text-[#5B5B5B] text-xl'
                                   onClick={saveCustomerInfo}
                             />
                                 :
                             <ClipLoader size={15} color="green"/>
                         }
                 
                      <h5 className='font-light text-[#5B5B5B]'>Save this information for next time.</h5>

                </div>
              </div>
              
     

          }


    </div>
  )
}
