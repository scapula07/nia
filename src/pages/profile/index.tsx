import React, { useState, useEffect, useRef } from 'react'
import { IoCameraOutline } from "react-icons/io5";
import {
    doc, setDoc,
    addDoc, collection,
    getDoc, getDocs,
    query, where, updateDoc, orderBy, onSnapshot
} from "firebase/firestore"
import { useRecoilValue } from 'recoil';
import { userStore } from '@/recoil';
import { db } from '@/firebase/config';
import { ClipLoader } from 'react-spinners';
import { BeatLoader } from 'react-spinners';
import { useRecoilState } from 'recoil';
import { profileApi } from '@/lib/api/profile.api';
import { authApi } from '@/lib/api/auth.api';

export default function Profile() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [profile, setProfile] = useState<any>({ name: "" })
    const [password, setPassword] = useState<string>('');


    const currentUser = useRecoilValue(userStore) as { id: "" }

    const [url, setUrl] = useState("")
    const [file, setFile] = useState({})

    const [isLoading, setLoader] = useState(false)
    const [loading, setLoading] = useState(false)
    const [editing, setEdit] = useState(false)




    const hiddenFileInput = useRef<HTMLInputElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
        if (hiddenFileInput.current) {
            hiddenFileInput.current.click();
        }
    };


    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            const dir = files[0];
            console.log(dir, "dir");
            setUrl(URL.createObjectURL(dir));
            setFile(dir);
        }
    }


    useEffect(() => {

        if (currentUser?.id?.length > 0) {
            const unsub = onSnapshot(doc(db, "users", currentUser?.id), (doc) => {
                console.log(doc.data(), "daa")

                setProfile({ ...doc.data(), id: doc?.id })
            });
        }
    }, [])



    const upload = async () => {
        setLoader(true)
        try {
            const res = await profileApi.updateImg(currentUser, profile, file)
            setLoader(false)
        } catch (e) {
            console.log(e)
            setLoader(false)
        }

    }

    const saveProfile = async () => {
        setLoading(true)
        try {
            const res = await profileApi.saveChanges(currentUser, profile, file)
            setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
        }

    }

    const saveEmail = async () => {
        setLoading(true)
        try {
            const res = await profileApi.updateImg(currentUser, profile, file)
            setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
        }

    }


    const editPassword = async () => {
        setEdit(true)
        try {
            const res = await authApi.changePassword(password)
            setEdit(false)
        } catch (e) {
            console.log(e)
            setEdit(false)
        }

    }

    return (

        <div className='w-full h-full flex md:px-0 px-4 justify-center py-10'>
            <div className='flex flex-col md:w-4/6 w-full  space-y-10'>
                <div className='flex w-full justify-between '>
                    <h5 className='md:text-4xl text-xl font-semibold '>Edit Profile</h5>
                    {loading ?
                        <ClipLoader
                            color="black"

                        />
                        :
                        <button className='text-green-600 py-1.5 text-sm px-4 rounded-lg border border-green-600' onClick={saveProfile}>Save changes</button>
                    }
                </div>


                <div className='py-10 flex flex-col space-y-4'>
                    <div className='border-b flex justify-between py-4'>
                        <h5 className='text-xl text-slate-600 font-light'>Username</h5>

                        <div className='flex items-center md:w-1/2 w-3/5 space-x-6 '>
                            <div className='flex flex-col md:w-1/2 space-y-2'>
                                <label className='font-light text-slate-600'>Full name</label>
                                <input
                                    placeholder={`${profile?.name}`}
                                    value={profile?.name}
                                    className="border rounded-lg py-2 w-full px-4 bg-white"
                                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                />

                            </div>


                        </div>

                    </div>




                    <div className='border-b flex justify-between py-4'>
                        <h5 className='text-xl text-slate-600 font-light'>Your photo</h5>

                        <div className='flex md:w-1/2 w-3/5 space-x-6 '>
                            <div className='flex flex-col md:w-1/2 space-y-2'>
                                {url?.length == 0 && profile?.img?.length > 0 ?
                                    <div>
                                        <img
                                            src={profile?.img}
                                            onClick={handleClick}
                                            className="rounded-full  h-24 w-24"

                                        />

                                        <input
                                            type="file"
                                            className='hidden'
                                            ref={hiddenFileInput}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    :
                                    <>

                                        {url?.length == 0 ?
                                            <div className='flex items-center justify-center h-24 w-24 rounded-full border'
                                                onClick={handleClick}
                                            >
                                                <IoCameraOutline
                                                    className='text-xl text-slate-600 font-light'
                                                />

                                                <input
                                                    type="file"
                                                    className='hidden'
                                                    ref={hiddenFileInput}
                                                    onChange={handleChange}
                                                />

                                            </div>
                                            :
                                            <div>
                                                <img
                                                    src={url}
                                                    onClick={handleClick}
                                                    className="rounded-full  h-24 w-24"

                                                />

                                                <input
                                                    type="file"
                                                    className='hidden'
                                                    ref={hiddenFileInput}
                                                    onChange={handleChange}
                                                />
                                            </div>


                                        }
                                    </>}


                            </div>
                            <div className='flex space-x-6 justify-end w-1/2'>
                                <div className='flex space-x-6 justify items-center'>
                                    <h5>Delete</h5>
                                    {isLoading ?
                                        <BeatLoader
                                            color="black"
                                            size={"8"}
                                        />
                                        :
                                        <h5 className='text-green-600' onClick={upload}>Update</h5>

                                    }


                                </div>



                            </div>

                        </div>

                    </div>



                    <div className='border-b flex justify-between py-4'>
                        <h5 className='text-xl text-slate-600 font-light'>Your Phone number</h5>

                        <div className='flex  md:w-1/2 w-3/5 space-x-6 '>
                            <div className='flex flex-col md:w-1/2 space-y-2'>
                                <label className='font-light text-slate-600'>Phone number</label>
                                <input
                                    placeholder=''
                                    value={profile?.phone}
                                    className="border rounded-lg py-2 w-full px-4 bg-white"
                                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                                />

                            </div>

                        </div>

                    </div>



                    <div className='border-b flex justify-between py-4'>
                        <h5 className='text-xl text-slate-600 font-light'>Your Email</h5>

                        <div className='flex  md:w-1/2 w-3/5 space-x-6 '>
                            <div className='flex flex-col md:w-1/2 space-y-2'>
                                <label className='font-light text-slate-600'>Email</label>
                                <input
                                    placeholder={`${profile?.email}`}
                                    value={profile?.email}
                                    className="border rounded-lg py-2 w-full px-4 bg-white"
                                    onChange={(e) => setProfile({ ...profile, emaile: e.target.value })}
                                />

                            </div>

                            <div className='md:w-1/2 w-[60%] justify-end flex '>
                                <h5 className='text-green-600'>Edit email</h5>
                            </div>


                        </div>

                    </div>



                    <div className='border-b flex justify-between py-4'>
                        <h5 className='text-xl text-slate-600 font-light'>Your password</h5>

                        <div className='flex  md:w-1/2 w-3/5 space-x-6 '>
                            <div className='flex flex-col md:w-1/2 space-y-2'>
                                <label className='font-light text-slate-600'>Password</label>
                                <input
                                    placeholder=''
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="border rounded-lg py-2 w-full bg-white"
                                />

                            </div>

                            <div className='md:w-1/2 w-full justify-end flex '>
                                {editing ?
                                    <BeatLoader
                                        color="black"
                                        size={8}
                                    />
                                    :
                                    <h5 className='text-green-500' onClick={editPassword}>Edit password</h5>
                                }
                            </div>


                        </div>

                    </div>




                    <div className='border-b flex justify-between py-4'>
                        <h5 className='text-xl text-slate-600 font-light'>Your Bio</h5>

                        <div className='flex  md:w-1/2 w-full space-x-6 '>
                            <div className='flex flex-col w-full space-y-2'>
                                <label className='font-light text-slate-600 hidden md:flex'>Bio</label>
                                <textarea
                                    placeholder=''
                                    value={profile?.bio}
                                    className="border rounded-lg py-2 w-full px-4 bg-white"
                                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                                />

                            </div>




                        </div>

                    </div>



                </div>


            </div>

        </div>



    )
}

