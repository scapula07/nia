import React,{ReactNode} from 'react'
import Header from '@/components/Layout/header'
import Footer from '@/components/Layout/Footer'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div className='w-full h-full'>
         <div className='w-full relative z-10'>
             <Header />
         </div>
         <div className='w-full pt-20'>
            {children}   
        </div>
        <div className='w-full'>
            <Footer />   
        </div>
    </div>
  )
}
