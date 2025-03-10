import React, { useState, useEffect,useRef } from 'react';
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai"; // Added AiOutlineMenu for the hamburger icon
import Modal from "../modal";
import Signin from '../auth/signin';
import Signup from '../auth/signup';
import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userStore } from '@/recoil';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'next/router';
import { Button } from "@chakra-ui/react";
import {
    MenuContent,
    MenuItem,
    MenuItemCommand,
    MenuRoot,
    MenuTrigger,
} from "@/components/ui/menu";

export default function Header() {
    const [bucket, setBucket] = useState<any>();
    const [signinTrigger, setSigninTrigger] = useState(false);
    const [signupTrigger, setSignupTrigger] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false); // State to toggle search bar visibility
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
  
    const currentUser = useRecoilValue(userStore) as { id: "" ,img:"",name:""};
    const router = useRouter();
    const auth = getAuth();

    useEffect(() => {
        if (currentUser?.id?.length > 0) {
            const ref = doc(db, "bucket", currentUser?.id);
            const unsub = onSnapshot(ref, (doc) => {
                setBucket(doc?.data());
            });
        }
    }, [currentUser?.id]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
          }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
    

    const handleLogout = async () => {
        try {
            localStorage.clear();
            sessionStorage.clear();
            await signOut(auth); // Sign out from Firebase
            router.push("/"); // Redirect to home page
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };
    
    console.log(currentUser?.img?.length,"uu")

    return (
        <>
            <div className='w-full fixed flex px-4 md:px-20 bg-white z-50 ' ref={dropdownRef}>
                <div className='flex w-full md:w-1/2 items-center space-x-4 md:space-x-20'>
                    <img
                        src='/nia_logo.png'
                        className='w-12 h-12 md:w-20 md:h-20'
                    />
                    {/* Desktop Search Bar */}
                    <div className='hidden md:flex border py-2 px-3 rounded-lg w-1/2 justify-between items-center bg-white'>
                        <input
                            placeholder='Search products or categories'
                            className='outline-none border-0 w-full text-xs text-black bg-white'
                        />
                        <FiSearch
                            className='text-slate-600'
                        />
                    </div>
                    {/* Mobile Search Icon */}
                    <div className='md:hidden flex items-center'>
                        <button onClick={() => setIsSearchVisible(!isSearchVisible)}>
                            <FiSearch className='text-slate-600 text-xl' />
                        </button>
                    </div>
                </div>
                {/* Mobile Search Bar (Visible when toggled) */}
                {isSearchVisible && (
                    <div className='md:hidden absolute top-16 left-4 right-4 bg-white border rounded-lg p-2'>
                        <input
                            placeholder='Search products or categories'
                            className='outline-none border-0 w-full text-xs text-black bg-white'
                        />
                    </div>
                )}
                <div className='hidden md:flex w-1/2 justify-between'>
                    <div className='w-1/3 flex items-center space-x-4'>
                        <Link href={"/"}>
                            <p>Home</p>
                        </Link>
                        <Link href={"/shop"}>
                            <p>Shop</p>
                        </Link>
                        <p>Contact Us</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        {!currentUser?.id ?
                            <>
                                <button className='border px-4 py-2 rounded-lg font-semibold'
                                    onClick={() => setSigninTrigger(true)}>
                                    Sign in
                                </button>
                                <button className='bg-[#009E4D] py-2 text-white px-4 rounded-lg font-semibold'
                                    onClick={() => setSignupTrigger(true)}>
                                    Sign up to shop
                                </button>
                            </>
                            :
                            <div className='w-full'>
                                 {currentUser?.img?.length == undefined?
                                    <h5 className='rounded-full bg-[#009E4D]  relative text-white font-semibold text-sm p-1 border-2 border-white lg:w-8 lg:h-8 w-6 h-6 flex items-center justify-center'
                                    onClick={() => setIsOpen(!isOpen)}

                                        >
                                        {currentUser?.name?.slice(0,1)}    
                                        L                                        
                                    </h5>
                                        :
                                       
                                     <img 
                                        src={currentUser?.img}
                                        className="rounded-full lg:w-8 lg:h-8 w-6 h-6  relative"
                                        onClick={() => setIsOpen(!isOpen)}
                                     />
                                 } 
                                       {isOpen && <Profile  currentUser={currentUser}/>}
                            </div>
                        }
                        <IoNotificationsOutline className='text-6xl' />
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
                        {currentUser?.id &&
                            <button onClick={handleLogout} className="flex items-center pl-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M14 19.75H15C17.0711 19.75 18.75 18.0711 18.75 16V8C18.75 5.92893 17.0711 4.25 15 4.25H14M8.24998 15.25L6.23743 13.2374C5.554 12.554 5.554 11.446 6.2374 10.7626L8.24998 8.75M8.74998 12H15.75" stroke="#D41A1F" strokeWidth="1.25" strokeLinecap="round" />
                                </svg>
                            </button>
                        }
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className='md:hidden flex items-center space-x-4'>
                    {currentUser?.id?.length > 0 && (
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
                    )}
                    <MenuRoot>
                        <MenuTrigger>
                            <Button variant="outline" size="sm" p={0}> {/* Adjusted padding for the icon */}
                                <AiOutlineMenu className="text-xl" /> {/* Hamburger icon */}
                            </Button>
                        </MenuTrigger>
                        <MenuContent>  
                            <MenuItem value='1'>
                               <h5>Home</h5> 
                            </MenuItem>
                            <MenuItem value='2'>
                                Shop
                            </MenuItem>
                            <MenuItem value='3'>
                                Contact Us
                            </MenuItem>
                            {!currentUser?.id &&
                                <>
                                    {/* <MenuItem value="signin" onClick={() => setSigninTrigger(true)}>
                                        Sign in
                                    </MenuItem>
                                    <MenuItem value="signup" onClick={() => setSignupTrigger(true)}>
                                        Sign up to shop
                                    </MenuItem> */}

                                </>
                            }
                            {
                                currentUser?.id && (
                                    <Link href="/profile" passHref>
                                        <MenuItem value='4'>
                                            My Profile
                                        </MenuItem>
                                    </Link>
                                )
                            }
                                     {
                                currentUser?.id && (
                                    <Link href="/orders/active" passHref>
                                        <MenuItem value='5'>
                                            My Orders
                                        </MenuItem>
                                    </Link>
                                )
                            }
                            {currentUser?.id &&
                                // <MenuItem value="logout" onClick={handleLogout}>
                                //     Logout
                                // </MenuItem>
                                ""
                            }
                        </MenuContent>
                    </MenuRoot>
                </div>
            </div>

            <Modal trigger={signinTrigger} cname="w-full md:w-1/3 py-2 h-96 px-4 rounded-lg" onClose={() => setSigninTrigger(false)}>
                <Signin onClose={() => setSigninTrigger(false)} />
            </Modal>
            <Modal trigger={signupTrigger} cname="w-full md:w-1/3 py-2 h-96 px-4 rounded-lg" onClose={() => setSignupTrigger(false)} >
                <Signup onClose={() => setSignupTrigger(false)} />
            </Modal>
        </>
    );
}

const Profile=({currentUser}:any)=>{
    return(
        <div className="absolute right-0 w-72 bg-white shadow-lg rounded-lg py-4 ">
          <div className="flex flex-col items-center space-y-4">
            <img 
              src={currentUser?.img} 
              alt="Profile" 
              className="w-20 h-20 rounded-full"
            />
            <div className='flex flex-col items-center space-x-2'>
              <p className="font-semibold">{currentUser?.name}</p>
              <p className="text-sm text-gray-500">{currentUser?.email}</p>
              <Link href={"/profile"} className="w-full">
                 <button className='w-full bg-[#E3E3E3] py-2 rounded-full text-sm'>Edit Profile</button>
              </Link>
          
            </div>
          </div>
          <hr className="my-2" />
          <Link href={`/orders/active`}>
              <button className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded">My Orders</button>
          </Link>
      
          <button className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded">Saved Items</button>
          {/* <button className="w-full text-left py-2 px-4 text-red-500 hover:bg-red-100 rounded">Log Out</button> */}
        </div>

    )
}