import React, { useState, useEffect } from 'react'
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Modal from "../modal"
import Signin from '../auth/signin';
import Signup from '../auth/signup';
import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userStore } from '@/recoil';
import { onSnapshot, doc } from 'firebase/firestore'
import { db } from '@/firebase/config';

export default function Header() {
    const [bucket, setBucket] = useState<any>()
    const [signinTrigger, setsigninTrigger] = useState(false)
    const [signupTrigger, setsignupTrigger] = useState(false)
    const currentUser = useRecoilValue(userStore) as { id: "" }

    useEffect(() => {

        if (currentUser?.id?.length > 0) {
            const ref = doc(db, "bucket", currentUser?.id)
            const unsub = onSnapshot(ref, (doc) => {
                setBucket(doc?.data())
            });
        }
    }, [currentUser?.id])

    return (
        <>
            <div className='w-full fixed flex px-20 bg-white'>
                <div className='flex w-1/2 items-center space-x-20'>
                    <img
                        src='/nia_logo.png'
                        className='w-20 h-20'
                    />
                    <div className='border py-4 px-3 rounded-lg flex w-1/2 justify-between items-center bg-white'>
                        <input
                            placeholder='Search products or categories'
                            className='outline-none border-0 w-full text-xs text-black bg-white'
                        />
                        <FiSearch
                            className='text-slate-600'
                        />
                    </div>
                </div>
                <div className='flex w-1/2 justify-between'>
                    <div className='w-1/3 flex items-center space-x-4'>
                        <Link href={"/"}>
                            <p>Home</p>
                        </Link>
                        <Link href={"/shop"}>
                            <p>Shop</p>
                        </Link>

                        <p>Contact Us</p>

                    </div>
                    <div className='flex  items-center space-x-4 '>
                        {!currentUser &&
                            <button className='border px-4 py-2 rounded-lg font-semibold'
                                onClick={() => setsigninTrigger(true)}>
                                Sign in
                            </button>
                        }
                        {!currentUser &&
                            <button className='bg-[#009E4D] py-2 text-white px-4 rounded-lg font-semibold'
                                onClick={() => setsignupTrigger(true)} >
                                Sign up to shop
                            </button>
                        }
                        <IoNotificationsOutline
                            className='text-3xl'
                        />
                        {currentUser?.id?.length > 0 &&
                            <Link href={"/cart"}
                            >
                                <div className='flex'>
                                    <AiOutlineShoppingCart
                                        className='text-2xl'
                                    />
                                    {bucket?.cart?.length > 0 &&
                                        <h5 className='text-xs bg-green-600 rounded-full flex items-center justify-center h-4 w-4 text-white '>{bucket?.cart?.length}</h5>
                                    }
                                </div>
                            </Link>
                        }
                    </div>
                </div>
            </div>

            <Modal trigger={signinTrigger} cname="w-1/3 py-2 h-96  px-4 rounded-lg">
                <Signin onClose={setsigninTrigger} />
            </Modal>
            <Modal trigger={signupTrigger} cname="w-1/3 py-2 h-96  px-4 rounded-lg">
                <Signup onClose={setsignupTrigger} />
            </Modal>
        </>
    )
}
