import React, { useEffect, useState } from 'react'
import { BsDash } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { onSnapshot, doc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase/config';
import { useRecoilValue } from 'recoil';
import { userStore } from '@/recoil';
import Link from 'next/link';
import Modal from '@/components/modal';
import GroupBuying from '@/components/GroupBuying';
import { MdArrowForwardIos } from "react-icons/md";



export default function Cart() {
    const [cart, setCart] = useState<any[]>([])
    const [trigger, setTrigger] = useState(false)
    const currentUser = useRecoilValue(userStore) as { id: "" }

    useEffect(() => {

        if (currentUser?.id?.length > 0) {
            const ref = doc(db, "bucket", currentUser?.id)
            const unsub = onSnapshot(ref, (doc) => {
                setCart(doc?.data()?.cart)
            });
        }
    }, [currentUser.id])

    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (cart.length > 0) {
            const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            setTotal(totalPrice);
        } else {
            setTotal(0);
        }
    }, [cart]);

    const removeFromCart = (itemId: string) => {
        const updatedCart = cart.filter(item => item.id !== itemId); // Remove the item
        setCart(updatedCart); // Update state

        // Update the database
        if (currentUser?.id?.length > 0) {
            const ref = doc(db, "bucket", currentUser.id);
            // Update the cart field in the document
            updateDoc(ref, { cart: updatedCart });
        }
    };


    return (
        <>
            <div className='w-full py-10 px-10'>
                <div className='flex flex-col space-y-6'>
                    <Link href="/shop">
                        <h5 className="hover:underline cursor-pointer">Return to shopping</h5>
                    </Link>
                    <h5 className='text-2xl font-bold'>My Cart</h5>
                </div>
                <div className='flex flex-col py-8 w-4/5 space-y-6'>
                    <h5 className='text-green-700  font-semibold'>You have {cart?.length} items in your cart</h5>
                    <Table cart={cart}  removeFromCart={removeFromCart}/>
                </div>

                <div className='flex w-4/5 space-x-6'>
                    <div className='w-1/2 flex flex-col space-y-6'>

                        <button
                            className='text-white py-3 space-x-4 px-4 bg-green-600 rounded-full flex justify-center items-center  text- font-semibbold w-56'
                            onClick={() => setTrigger(true)}
                        >
                            Use Group Buying
                        </button>

                        <div className='border-b py-4 px-6 w-[80%]'>
                            <div className='flex items-center justify-between'>
                                <h5 className='text-[#D41A1F] text-lg'>How Group Buying works?</h5>
                                <MdArrowForwardIos className='text-xl' />
                            </div>

                        </div>

                    </div>
                    <div className='w-1/2'>
                        <div className='border flex flex-col h-60 rounded-lg space-y-4 px-8 py-6'>
                            <h5 className='font-semibold text-xl'>Cart Summary</h5>
                            <div className='flex flex-col space-y-4'>
                                <div className='flex justify-between'>
                                    <h5>Subtotal</h5>
                                    <h5></h5>
                                </div>
                                <hr></hr>
                                <div className='flex justify-between'>
                                    <h5>Total</h5>
                                    <h5>${total.toFixed(2)}</h5>
                                </div>
                                <Link href={"/checkout"}>
                                    <button
                                        className='text-white py-2.5 space-x-4 px-4 bg-[#d41a1e] rounded-lg flex justify-center items-center w-full text-sm'>
                                        Checkout
                                    </button>

                                </Link>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
            <Modal trigger={trigger} cname="w-[40%] py-2 h-96  px-4 rounded-lg">
                <GroupBuying onClose={setTrigger} />
            </Modal>
        </>
    )
}

const Table = ({ cart, removeFromCart }: any) => {
    return (
        <div className='flex flex-col py-4 '>
            <table className="table-auto w-full ">
                <thead>
                    <tr className='py-2  border-black' >
                        {
                            [
                                "Product",
                                "Quantity",
                                "Price",
                                "Subtotal"
                            ].map((text) => {
                                return (
                                    <th className='py-1 text-black text-start  py-2 px-4'>{text}</th>
                                )
                            })
                        }
                    </tr>

                </thead>
                <tbody className='space-y-4'>
                    {
                        cart?.map((item: any) => {
                            return (
                                <Row key={item.id} item={item} removeFromCart={removeFromCart} />
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}





const Row = ({ item , removeFromCart}: any) => {

    return (
        <tr className=' border-black py-4'>
            <td>
                <Product item={item} />
            </td>
            <td>
                <div className='flex items-center space-x-5 border px-4 rounded-xl w-36 justify-center bg-white' >
                    <BsDash
                        className='text-2xl font-bold '
                    />
                    <input
                        className='h-10 w-10 rounded-sm text-xs border-0 px-3 text-center bg-white'
                        value={5}
                    />
                    <IoMdAdd
                        className='text-2xl font-bold '
                    />

                </div>
            </td>
            <td className='px-6'>${item.price}</td>
            <td className='px-6'>${(item.price * item.quantity).toFixed(2)}</td>
            <td>
                <RiDeleteBin6Line
                    className='cursor-pointer text-red-600'
                    onClick={() => removeFromCart(item.id)}
                />
            </td>

        </tr>
    )
}


const Product = ({ item }: any) => {
    return (
        <div className='flex space-x-4'>
            <img
                src={item?.image}
                className='w-20 h-20 rounded-xl'
            />
            <div className='flex flex-col'>
                <h5 className='font-bold text-lg'>{item?.productName}</h5>
                <p className='text-sm'>{item.description}</p>

            </div>

        </div>
    )
}