import React, { useState, useEffect } from 'react'
import ProductDisplay from '@/components/Product/productDisplay'
import Details from '@/components/Product/details'
import { useRouter } from 'next/router';
import { doc, getDoc, setDoc, updateDoc, collection, addDoc, getDocs, query, where, onSnapshot } from "firebase/firestore";
import { db } from '@/firebase/config';
import Link from 'next/link';

export default function Product() {
    const router = useRouter();
    const { id } = router.query;
    const productId = id as string
    const [product, setProduct] = useState<any>({})
    useEffect(() => {
        if (id?.length != undefined) {
            const unsub = onSnapshot(doc(db, "products", productId), (doc) => {
                console.log(doc.data(), "daa")

                setProduct({ ...doc.data(), id: doc?.id })
            });
        }
    }, [])
    return (
        <div className='w-full pt-10 px-10 h-full'>
            <div className='w-full flex items-center space-x-4 text-black'>
                <Link href="/">
                    <h5 className="hover:underline cursor-pointer">Home</h5>
                </Link>
                <span>/</span>
                <Link href="/shop">
                    <h5 className="hover:underline cursor-pointer">Shop</h5>
                </Link>
                <span>/</span>
                <h5 className="">{product.productName}</h5>
            </div>

            <div className='w-full py-4 flex space-x-10'>
                <div className='w-1/2'>
                    <ProductDisplay product={product} />
                </div>
                <div className='w-1/2'>
                    <Details product={product} />
                </div>
            </div>
        </div>
    )
}
