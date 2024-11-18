import React from 'react'
import Sort from '@/components/Shop/sort'
import Category from '@/components/Shop/category'
import Product from '@/components/Shop/product'

export default function Shop() {
  return (
    <div className='w-full'>
          <div className='w-full'> </div>

          <div className='p-16 w-full'>
              <div></div>
              <div className='w-full flex '>
                   <div className='w-3/5'>
                      <Sort />
                      <div className='w-full grid grid-cols-3 py-4 gap-4'>
                          {[
                              {
                               img:'/p1.png',
                               title:'Gallon of milk'
                              },
                              {
                                img:'/p2.png',
                                title:'Create of eggs'
                               },
                               {
                                img:'/p3.png',
                                title:'Bag of milk'
                               }
                              ]?.map((item)=>{
                             return(
                                <Product 
                                    {...item}
                                 />
                              )
                           })}
                      </div>
                   </div>
                   <div className='w-2/5 px-16'>
                       <Categories />
                  </div>

              </div>
         </div>
    </div>
  )
}


const Categories=()=>{
    return(
       <div className='bg-[#f3f3f3] w-full py-6 px-8 rounded-xl  space-y-4'>
               <h5 className='font-semibold text-xl'>Categories</h5>
                <div className='flex flex-col w-full space-y-6'>
                    {
                        [  {
                                label:'Fresh Produce',
                                items:[]
                            },
                            {
                                label:'Dairy & Eggs',
                                items:[]
                            },
                            {
                                label:'Meats and Seafoods',
                                items:[]
                            },
                            {
                                label:'Pantry Staples',
                                items:[]
                            },
                            {
                                label:'Frozen Foods',
                                items:[]
                            },
                            {
                                label:'Beverages',
                                items:[]
                            },
                            {
                                label:'Beverages',
                                items:[]
                            },
                            {
                                label:'Beverages',
                                items:[]
                            },
                            {
                                label:'Beverages',
                                items:[]
                            },
                            {
                                label:'Beverages',
                                items:[]
                            },
                            {
                                label:'Beverages',
                                items:[]
                            }                    
                        ]?.map((item)=>{
                            return(
                            <Category 
                                item={item}
                            />
                            )
                        })
                    }
                </div>

       </div>
    )
}