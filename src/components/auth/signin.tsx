import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { ClipLoader } from 'react-spinners';
import { useRecoilState } from 'recoil';
import Link from 'next/link';
import { authApi } from '@/lib/api/auth.api';
import { useRouter } from "next/router";


export default function Signin({ onClose }: any) {
    const [currentUser, setcurrentUser] = useState()
    const [credentail, setCred] = useState({ name: "", email: "", password: "" })
    const [loader, setLoader] = useState(false)
    const [errorMsg, setErrorMsg] = useState<string | null>()

    const { replace } = useRouter()


    const login = async () => {
        setErrorMsg(null)


        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(credentail?.email)) {
            setErrorMsg("email is invalid");
            setLoader(false);
        }

        if (credentail?.password.length < 8) {
            setErrorMsg("Password should be atleast 8 characters");
            setLoader(false);
            return;
        }
        try {
            setLoader(true)
            const user:any = await authApi.login(credentail?.email, credentail?.password)


            setLoader(false)
            localStorage.clear();
            localStorage.setItem('user', JSON.stringify(user));
            setcurrentUser(user)

            // Redirect if admin
            if (user.role === "admin") {
                replace("/dashboard");
            } else {
                replace("/shop"); // or any other default page for non-admin users
            }
            onClose(false);


        } catch (e:any) {
            setLoader(false)
            setErrorMsg(e?.message)
        }
    }
    return (
        <div className='w-full'>

            <div className='bg-white w-full w-full rounded-lg   px-6 py-4'>
                <div className='flex justify-end '>
                    <IoMdClose
                        className='text-3xl'
                        onClick={() => onClose(false)}
                    />

                </div>

                <div className='flex flex-col space-y-6 '>
                    <div className='flex flex-col items-center space-y-5'>
                        <img
                            src="/nia_logo.png"
                            alt="Nia Logo"
                            className="w-16 h-16"
                        />
                        <h5 className='text-xl font-semibold'>Sign in</h5>
                        {/* <h5 className='text-slate-500'>Lorem ipsum dolor sit amet.</h5> */}

                    </div>
                    {errorMsg && (

                        <h5 className='text-xs font-semibold text-red-500'>{errorMsg}</h5>
                    )}


                    <div className='flex flex-col space-y-3 py-4'>
                        {
                            [
                                {
                                    label: "Email",
                                    desc: "Enter your email",
                                    type: "text",
                                    value: credentail?.email,
                                    click: (txt: string) => setCred({ ...credentail, email: txt })

                                },
                                {
                                    label: "Password",
                                    desc: "Enter your password",
                                    type: "password",
                                    value: credentail?.password,
                                    click: (txt: string) => setCred({ ...credentail, password: txt })

                                }

                            ].map((item) => {
                                return (
                                    <div className='flex flex-col space-y-1'>
                                        <label className='text-slate-500 text-lg font-light text-sm'>{item?.label}</label>
                                        <input
                                            type={item?.type}
                                            placeholder={item?.desc}
                                            className="outline-none border py-3 px-2 rounded-xl text-xs bg-white "
                                            onChange={(e) => item?.click(e.target.value)}
                                        />
                                    </div>
                                )
                            })

                        }
                        <p className='text-[#009E4D] text-lg font-light text-xs'>Forgot your password?</p>

                    </div>



                    <div className='flex flex-col w-full pt-3 space-y-6 items-center pb-2'>
                        {!loader ?
                            <button className='text-white py-2.5 space-x-4 px-4 rounded-lg flex justify-center items-center bg-[#009E4D] w-full text-sm'
                                onClick={login}
                            >
                                <span>Sign in</span>

                            </button>
                            :
                            <ClipLoader
                                color="#C74A1F"
                                loading={true}
                                size="12"
                            />

                        }


                        <div className='flex items-center text-xs'>
                            <h5>Don't  have an account?</h5>
                            <Link href={"/signup"}>

                                <h5 className='text-[#009E4D]'>Signup</h5>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
