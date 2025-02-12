import React, { useEffect, useState } from 'react';
import Sort from '@/components/Shop/sort';
import Category from '@/components/Shop/category';
import Product from '@/components/Shop/product';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '@/firebase/config';

export default function Shop() {
  const [products, setProducts] = useState([]);

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

  return (
    <div className='w-full'>
      <div className='p-4 md:p-16 w-full'>
        <div className='w-full flex flex-col md:flex-row'>
          {/* Products Section */}
          <div className='w-full md:w-3/5'>
            <Sort count={products.length} />
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4'>
              {products?.map((item) => (
                <Product key={item.id} product={item} />
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div className='w-full md:w-2/5 mt-8 md:mt-0 md:px-16'>
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

const Categories = () => {
  return (
    <div className='bg-[#f3f3f3] w-full py-6 px-4 md:px-8 rounded-xl space-y-4'>
      <h5 className='font-semibold text-xl'>Categories</h5>
      <div className='flex flex-col w-full space-y-4 max-h-[400px] overflow-y-auto'>
        {[
          { label: 'Fresh Produce', items: [] },
          { label: 'Dairy & Eggs', items: [] },
          { label: 'Meats and Seafoods', items: [] },
          { label: 'Pantry Staples', items: [] },
          { label: 'Frozen Foods', items: [] },
          { label: 'Beverages', items: [] },
        ]?.map((item, index) => (
          <Category key={index} item={item} />
        ))}
      </div>
    </div>
  );
};