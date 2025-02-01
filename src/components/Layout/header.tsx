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
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'next/router';

export default function Header() {
    const [bucket, setBucket] = useState<any>()
    const [signinTrigger, setsigninTrigger] = useState(false)
    const [signupTrigger, setsignupTrigger] = useState(false)
    const currentUser = useRecoilValue(userStore) as { id: "" }
    const router = useRouter();
    const auth = getAuth();

    useEffect(() => {
        if (currentUser?.id?.length > 0) {
            const ref = doc(db, "bucket", currentUser?.id)
            const unsub = onSnapshot(ref, (doc) => {
                setBucket(doc?.data())
            });
        }
    }, [currentUser?.id])

    const handleLogout = async () => {
        try {
            localStorage.clear();
            sessionStorage.clear();
            await signOut(auth); // Sign out from Firebase
            router.push("/") // Redirect to home page
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

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
                    <div className='flex  items-center space-x-4'>
                        {!currentUser?.id &&
                            <>
                                <button className='border px-4 py-2 rounded-lg font-semibold'
                                    onClick={() => setsigninTrigger(true)}>
                                    Sign in
                                </button>
                                <button className='bg-[#009E4D] py-2 text-white px-4 rounded-lg font-semibold'
                                    onClick={() => setsignupTrigger(true)}>
                                    Sign up to shop
                                </button>
                            </>
                        }
                        {currentUser?.id &&

                            <button onClick={handleLogout} className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M14 19.75H15C17.0711 19.75 18.75 18.0711 18.75 16V8C18.75 5.92893 17.0711 4.25 15 4.25H14M8.24998 15.25L6.23743 13.2374C5.554 12.554 5.554 11.446 6.2374 10.7626L8.24998 8.75M8.74998 12H15.75" stroke="#D41A1F" stroke-width="1.25" stroke-linecap="round" />
                                </svg>
                            </button>
                        }
                        <IoNotificationsOutline className='text-3xl' />
                        {currentUser?.id?.length > 0 &&
                            <Link href={"/cart"}>
                                <div className='flex'>
                                    <AiOutlineShoppingCart className='text-2xl' />
                                    {bucket?.cart?.length > 0 &&
                                        <h5 className='text-xs bg-green-600 rounded-full flex items-center justify-center h-4 w-4 text-white'>
                                            {bucket?.cart?.length}
                                        </h5>
                                    }
                                </div>
                            </Link>
                        }
                    </div>
                </div>
            </div>

            <Modal trigger={signinTrigger} cname="w-1/3 py-2 h-96 px-4 rounded-lg">
                <Signin onClose={() => setsigninTrigger(false)} />
            </Modal>
            <Modal trigger={signupTrigger} cname="w-1/3 py-2 h-96 px-4 rounded-lg">
                <Signup onClose={() => setsignupTrigger(false)} />
            </Modal>
        </>
    )
}
