import React,{useState} from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoRadioButtonOffSharp,IoRadioButtonOn  } from "react-icons/io5";


export default function Category({item,filters,setFilter,index}:any) {
  const [onRadio,setRadio]=useState<boolean>(false)
  const remove=()=>{   
    const newFilters=[...filters]
    newFilters.splice(index, 1);
    setFilter(newFilters)
  }

  return (
    <div className='w-full '>
          <div className='flex w-full items-center space-x-4  py-2'>
          {!onRadio?
              <IoRadioButtonOffSharp 
                onClick={()=>{setRadio(true); setFilter((prev:any)=>[...prev,item])}}
                className="text-[#009E4D] text-2xl"
              />
              :
              <IoRadioButtonOn 
                  onClick={()=>{setRadio(false); remove()}}
                  className="text-[#009E4D] text-2xl"
              />
              }

              <h5 className='text-[#5B5B5B] text-sm'>{item}</h5>
       
          </div>
    </div>
  )
}
