import React, { useEffect, useRef, useState } from 'react';
import Sort from '@/components/Shop/sort';
import Category from '@/components/Shop/category';
import Product from '@/components/Shop/product';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { IoIosClose, IoIosMenu } from "react-icons/io";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { productApi } from '@/lib/api/product.api';
import { ClipLoader } from 'react-spinners';
import { IoFilterOutline } from "react-icons/io5";


export default function Shop() {
  const [products, setProducts] = useState([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null); // Ref for the drawer

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setDrawerOpen(false);
      }
    };

    if (isDrawerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDrawerOpen]);

  useEffect(() => {
    const q = query(collection(db, "products"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const products: any = [];
      querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
      });
      setProducts(products);
    });

    return () => unsubscribe(); // Cleanup the listener
  }, []);
  console.log(products,"ppp")

  return (
    <div className='w-full h-full px-10'>
      <div className='p-4 md:p-16 w-full h-full'>
        <div className='w-full flex flex-col md:flex-row h-full'>
          {/* Products Section */}
          <div className='w-full  md:w-3/5'>
            {/* Toggle Button for Categories Drawer */}
            <div className='flex items-center w-full justify-between'>
                <button 
                  className='md:hidden flex items-center justify-center p-2 bg-gray-200 rounded-full '
                  onClick={() => setDrawerOpen(!isDrawerOpen)}
                >
                  <IoFilterOutline size={24} />
                </button>
                <Sort count={products.length} />

            </div>
      
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4'>
              {products?.map((item:any) => (
                <Product key={item?.id} product={item} />
              ))}
            </div>
          </div>

          {/* Categories Section as Drawer */}
          {isDrawerOpen && (
            <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end'>
              <div ref={drawerRef} className='w-3/4 bg-white h-full p-4'>
                <button 
                  className='text-right mb-4'
                  onClick={() => setDrawerOpen(false)}
                >
                  <IoIosClose size={24} />
                </button>
                <Categories setProducts={setProducts} />
              </div>
            </div>
          )}

          {/* Categories Section for larger screens */}
          <div className='hidden md:block w-full md:w-2/5 mt-8 md:mt-0 md:px-16 h-full flex flex-col space-y-10'>
            <Categories setProducts={setProducts} />
            <div className='w-full'>
              <PriceFilter setProducts={setProducts} />
            </div>
     
          </div>
        </div>
      </div>
    </div>
  );
}

const Categories = ({setProducts}:any) => {
  const [filters,setFilter]=useState([])
  const [isLoading,setLoading]=useState(false)
  console.log(filters,"ff")

  const apply=async()=>{
    setLoading(true)
   try{
      const res=await productApi.filterProducts(filters) as any[]
      console.log(res,'res')
      res?.length >0&&setProducts(res)
      setLoading(false)
    }catch(e){
      setLoading(false)
      console.log(e)
    }
}

  return (
    <div className='bg-[#E3E3E34D] w-full py-3 px-2 md:px-8 rounded-xl space-y-2'>
      <div className='w-full flex items-center justify-between'>        
             <h5 className='font-semibold text-[16px]'>Categories</h5>
         <div className='flex items-center space-x-3'>
             <h5 className='font-light bg-green-100 px-6 py-1 rounded-lg text-[13px] text-[#009E4D]' 
                onClick={apply}
             >
             {!isLoading? 

              "Apply"
              :
              <ClipLoader size={10} color="green"/>
             }
              </h5>
             <h5 className='text-[13px] bg-gray-300 flex items-center px-3 py-0.5 rounded-full'>
               <span>Clear</span>
              <IoIosClose className='text-lg'/>
            </h5>
         </div>

      </div>
      <div className='flex flex-col w-full space-y-2 max-h-[700px]'>
        {[
          "Bakery",
          "Beverages",
          "Coffee",
          "Condiments",
          "Dairy",
          "Dairy Alternative",
          "Flour",
          "Fruit",
          "Grains",
          "Meat & Seafood",
          "Oils",
          "Seasonings",
          "Snacks",
          "Vegetables",
          "Other",
        ]?.map((item, index) => (
          <Category 
            key={index} 
            item={item} 
            filters={filters}
            setFilter={setFilter}

          />
        ))}
      </div>
    </div>
  );
};

const PriceFilter=({setProducts}:any)=>{
  const [prices,setPrices]=useState({low:0,high:1000})
  const [isLoading,setLoading]=useState(false)

  const findPrice=async()=>{
    setLoading(true)
  try{
     const res=await productApi.findPrice(prices) as any[]
     res?.length >0&&setProducts(res)
     setLoading(false)
   }catch(e){
     setLoading(false)
     console.log(e)
   }
}

    return(
      <div className='bg-[#E3E3E34D] w-full py-3 px-4 space-y-4'>
            <h5 className='text-[20px] font-[500]'>Filter by Price</h5> 
            <Slider 
             range 
             min={15}
             max={10000}
            //  value={[prices.low,prices.high]}
             onChange={(e)=>{
               const r=e as number[]
               setPrices({low:r[0],high:r[1]})
            }} 
         
            />
           <div className='flex items-center justify-between'> 
               <h5 className='font-semibold'>Price: ${prices.low} - ${prices.high}</h5>
               <button className='border-2 px-6 py-2  font-light rounded-lg text-xs font-bold'
                  onClick={findPrice}
                >
                {!isLoading? 

                    "Filter"
                    :
                    <ClipLoader size={10} color="green"/>
                    }
              </button>
           </div>
       </div>
    )
}