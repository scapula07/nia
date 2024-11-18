import React from 'react'
import { BsDash } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Cart() {
  return (
    <div className='w-full py-10 px-10'>
        <div className='flex flex-col space-y-6'>
              <h5 className='underline'>Return to Shopping</h5>
              <h5 className='text-2xl font-bold'>My Cart</h5>
        </div>
        <div className='flex flex-col py-8 w-4/5 space-y-6'>
             <h5 className='text-green-700  font-semibold'>You have 3 items in your cart</h5>
             <Table/>
        </div>

        <div className='flex w-4/5'>
              <div className='w-1/2 flex flex-col'> 
                        <button
                            className='text-white py-3 space-x-4 px-4 bg-green-600 rounded-full flex justify-center items-center w-full text-sm w-72'>        
                              Use Group Buying
                        </button>
                 
              </div>
              <div className='w-1/2'> 
                      <div className='border flex flex-col h-60 rounded-lg space-y-4 px-8 py-6'>
                          <h5 className='font-semibold text-xl'>Cart Summary</h5>
                          <div className='flex flex-col space-y-4'>
                               <div className='flex justify-between'>
                                    <h5>Subtotal</h5>
                                    <h5>$665</h5>
                              </div>
                              <hr></hr>
                              <div className='flex justify-between'>
                                    <h5>Total</h5>
                                    <h5>$665</h5>
                              </div>

                              <button
                                 className='text-white py-2.5 space-x-4 px-4 bg-[#d41a1e] rounded-lg flex justify-center items-center w-full text-sm'>        
                                   Checkout
                              </button>
                         </div>
                         

                    </div>
              </div>

        </div>
    </div>
  )
}

const Table=()=>{
   return(
      <div className='flex flex-col py-4 '>
             <table className="table-auto w-full ">
                    <thead>
                         <tr  className='py-2  border-black' >
                              {
                                [
                                  "Product",
                                  "Quantity",
                                  "Price",
                                  "Subtotal"
                                ].map((text)=>{
                                 return(
                                    <th className='py-1 text-black text-start  py-2 px-4'>{text}</th>
                                   )
                                })
                              }
                         </tr>
                            
                      </thead>
                      <tbody className='space-y-4'>
                            {
                               [1,2].map(()=>{
                                  return(
                                        <Row />
                                    )})
                              }
                      </tbody>
            </table>

       </div>
   )
}





const Row=()=>{

   return(
      <tr className=' border-black '>
         <td>
            <Product />
         </td>
         <td>
              <div className='flex items-center space-x-5 border px-4 rounded-xl w-36 justify-center' >
                      <BsDash
                            className='text-2xl font-bold '
                        />
                         <input 
                            className='h-10 w-10 rounded-sm text-xs border-0 px-3 text-center'
                            value={5}
                        />
                        <IoMdAdd
                            className='text-2xl font-bold '
                        />

                </div>
         </td>
         <td className='px-6'>$70</td>
         <td className='px-6'>$350</td>
         <td>
          <RiDeleteBin6Line />
         </td>
      
     </tr>
  )
}


const Product=()=>{
     return(
        <div className='flex space-x-4'>
             <img 
               src='/p1.png'
               className='w-20 h-20 rounded-xl'
              />
              <div className='flex flex-col'>
                 <h5 className='font-bold text-lg'>Prairie Farms Fresh Milk</h5>
                 <p className='text-sm'>Pure, farm-fresh whole milk packed <br></br> with essential nutrients like calcium and vitamin D.</p>
                
              </div>

        </div>
     )
}