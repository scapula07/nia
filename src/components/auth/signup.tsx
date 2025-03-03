import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { ClipLoader } from 'react-spinners';
import { useRouter } from "next/router";
import Link from 'next/link';
import { authApi } from '@/lib/api/auth.api';

export default function Signup({ onClose }: any) {
    const [currentUser, setCurrentUser] = useState();
    const [credentials, setCredentials] = useState({ fullName: "", email: "", phoneNumber: "", password: ""});
    const [loader, setLoader] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const { replace } = useRouter();

    const login = async () => {
        setErrorMsg(null);

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(credentials?.email)) {
            setErrorMsg("Email is invalid");
            setLoader(false);
            return;
        }

        if (credentials?.password.length < 8) {
            setErrorMsg("Password should be at least 8 characters");
            setLoader(false);
            return;
        }


        try {
            setLoader(true);
            const user:any = await authApi.register(credentials?.email, credentials?.phoneNumber, credentials?.password, credentials?.fullName);
            setLoader(false);
            localStorage.clear();
            localStorage.setItem('user', JSON.stringify(user));
            setCurrentUser(user);

            onClose(false);
      
            replace('/shop');
        } catch (e:any) {
            setLoader(false);
            setErrorMsg(e.message);
        }
    };

    return (
        <div className='w-409 fixed inset-0 flex justify-center items-center p-4 '>
            <div className='bg-white w-full rounded-lg px-6 py-4'>
                <div className='flex justify-end'>
                    <IoMdClose className='text-3xl' onClick={() => onClose(false)} />
                </div>
                <div className='flex flex-col space-y-6'>
                    <div className='flex flex-col items-center space-y-5'>
                        <img src="/nia_logo.png" alt="Nia Logo" className="w-16 h-16" />
                        <h5 className='text-xl font-semibold'>Sign Up</h5>
                    </div>
                    {errorMsg && <h5 className='text-xs font-semibold text-red-500'>{errorMsg}</h5>}
                    <div className='flex flex-col space-y-3 py-4'>
                        {[
                            { label: "Full Name", desc: "Enter your full name", type: "text", value: credentials?.fullName, click: (txt: string) => setCredentials({ ...credentials, fullName: txt }) },
                            { label: "Email", desc: "Enter your email", type: "text", value: credentials?.email, click: (txt: string) => setCredentials({ ...credentials, email: txt }) },
                            { label: "Phone number", desc: "Enter your phone number", type: "text", value: credentials?.phoneNumber, click: (txt: string) => setCredentials({ ...credentials, phoneNumber: txt }) },
                            { label: "Password", desc: "Enter your password", type: "password", value: credentials?.password, click: (txt: string) => setCredentials({ ...credentials, password: txt }) },
                        ].map((item, index) => (
                            <div className='flex flex-col space-y-1' key={index}>
                                <label className='text-slate-500 text-lg font-light text-sm'>{item.label}</label>
                                <input
                                    type={item.type}
                                    placeholder={item.desc}
                                    className="outline-none border py-3 px-2 rounded-xl text-xs bg-white"
                                    onChange={(e) => item.click(e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col w-full pt-3 space-y-6 items-center pb-2'>
    
                        {!loader ? (
                            <button className='text-white py-2.5 space-x-4 px-4 rounded-lg flex justify-center items-center bg-[#009E4D] w-full text-sm' onClick={login}>
                                <span>Sign up</span>
                            </button>
                        ) : (
                            <ClipLoader color="#009E4D" loading={true} size={15} />
                        )}
                        <div className='flex items-center text-xs'>
                            <h5>Already have an account?</h5>
                            <Link href={"/signup"}>
                                <h5 className='text-[#009E4D]'> Signin</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}