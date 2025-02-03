import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { ClipLoader } from 'react-spinners';
import { useRouter } from "next/router";
import Link from 'next/link';
import { authApi } from '@/lib/api/auth.api';

export default function Signup({ onClose }: any) {
    const [currentUser, setCurrentUser] = useState();
    const [credentials, setCredentials] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
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

        if (credentials.password !== credentials.confirmPassword) {
            setErrorMsg("Passwords do not match");
            setLoader(false);
            return;
        }

        try {
            setLoader(true);
            const user = await authApi.register(credentials?.email, credentials?.password, `${credentials?.firstName} ${credentials?.lastName}`);
            setLoader(false);
            localStorage.clear();
            localStorage.setItem('user', JSON.stringify(user));
            setCurrentUser(user);

            onClose(false);
      
            replace('/shop');
        } catch (e) {
            setLoader(false);
            setErrorMsg(e.message);
        }
    };

    return (
        <div className='w-full fixed inset-0 flex justify-center items-center p-4 '>
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
                            { label: "First Name", desc: "Enter your first name", type: "text", value: credentials?.firstName, click: (txt: string) => setCredentials({ ...credentials, firstName: txt }) },
                            { label: "Last Name", desc: "Enter your last name", type: "text", value: credentials?.lastName, click: (txt: string) => setCredentials({ ...credentials, lastName: txt }) },
                            { label: "Email", desc: "Enter your email", type: "text", value: credentials?.email, click: (txt: string) => setCredentials({ ...credentials, email: txt }) },
                            { label: "Password", desc: "Enter your password", type: "password", value: credentials?.password, click: (txt: string) => setCredentials({ ...credentials, password: txt }) },
                            { label: "Confirm Password", desc: "Re-enter your password", type: "password", value: credentials?.confirmPassword, click: (txt: string) => setCredentials({ ...credentials, confirmPassword: txt }) },
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
                            <ClipLoader color="#C74A1F" loading={true} size={12} />
                        )}
                        <div className='flex items-center text-xs'>
                            <h5>Already have an account?</h5>
                            <Link href={"/signup"}>
                                <h5 className='text-[#009E4D]'>Signin</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}