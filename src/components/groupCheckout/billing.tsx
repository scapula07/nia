import React, { useEffect, useState } from 'react'
import { orderApi } from '@/lib/api/order.api'
import { ClipLoader } from 'react-spinners'
import { useRouter } from "next/router";
import { IoRadioButtonOffSharp,IoRadioButtonOn  } from "react-icons/io5";
import Modal from '../modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Billing({ cart, currentUser, customer,offers }: any) {
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)
    const [total, setTotal] = useState<number>(0)
    const [totalDiscount, setDiscount] = useState<number>(0)

    const { replace } = useRouter()

    const processPayment = async () => {
        setLoading(true)
        setErrorMsg(null)
        const newCart = applyDiscountsToCart(cart, offers);
        
        try {
            const id: any = await orderApi.createGroupOrder(newCart, currentUser, customer)
            const res = await orderApi.checkout(newCart, id)
           
            setLoading(false)
            const { url } = res?.data;
            if (url) {
              window.location.href = url; // Redirect to Stripe Checkout
            } else {
              console.error('No URL returned from server');
            }
             setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }


    function calculateTotalPrice(products: any) {
        let totalPrice = 0;

        products.forEach((product: any) => {
            const subtotal = parseFloat(product.price) * product.qty;
            totalPrice += subtotal as number
        });

        return totalPrice.toFixed(2);
    }
    function calculateTotalDiscountedPrice(products: any) {
        let totalPrice = 0;
    
        products.forEach((product: any) => {
            // Find the offer matching the product ID
            const offer = offers.find((o: any) => o.productID === product.id);
    
            // Apply discount if an offer exists
            let priceAfterDiscount = product.price;
        
            if (offer?.discountPrice >0) {
                console.log(offer)
                const discount = (offer?.offeredDiscount / 100) * product.price;
                priceAfterDiscount -= discount; // Apply discount
            }
     
            // Calculate subtotal for this product
            const subtotal = priceAfterDiscount * product.qty;
            totalPrice += subtotal;
        });
    
        return totalPrice.toFixed(2); // Return as string with 2 decimal places
    }
    

    useEffect(() => {
        if(offers?.length >0){
           
            const totalPrice = calculateTotalPrice(cart);
            const totalDiscountedPrice = calculateTotalDiscountedPrice(cart);
            setTotal(Number(totalPrice))
            setDiscount(Number(totalDiscountedPrice))
        }
  
    }, [cart,offers])

    function applyDiscountsToCart(products: any[], offers: any[]) {
        return products.map((product) => {
            // Find the offer matching the product ID
            const offer = offers.find((o) => o.productID === product.id);
    
            // Apply discount if an offer exists
            let discountedPrice = product.price;
            if (offer && offer.discountPrice) {
                const discount = (offer?.offeredDiscount / 100) * product.price;
                discountedPrice -= discount; // Reduce price by discount percentage
            }
    
            // Return new product object with updated price
            return {
                ...product,
                price: discountedPrice.toFixed(2), // Ensure price is formatted correctly
            };
        });
    }
    
    return (
        <div className='w-full flex flex-col space-y-10'>
            <BillingSummary cart={cart} total={total} offers={offers} totalDiscount={totalDiscount} />
            <OrderSummary cart={cart} processPayment={processPayment} loading={loading} total={total} offers={offers} totalDiscount={totalDiscount} />

        </div>
    )
}



const BillingSummary = ({ cart, total,offers,totalDiscount }: any) => {
    return (
        <div className='w-full bg-[#F3F3F3] px-8 space-y-4 py-6 rounded-lg'>
            <h5 className='font-[700] text-[20px]'>Billing Details</h5>
            <div className='flex flex-col space-y-1'>
                <h5 className='text-[18px] font-[600] text-[#5B5B5B]'>Item Total</h5>
                <div className='flex items-center justify-between py-3'>
                   <h5 className='font-[500] text-[#E62F34] text-[18px]'>{cart?.length} Product{cart?.length >1?"s":""}</h5>
                   <h5 className="font-[500] text-[#E62F34] text-[28px] line-through">
                     ${total}
                   </h5>


                </div>
                <h5 className='font-[700] text-[#5B5B5B] text-[18px]'>Discount{offers?.length >1?"s":""}</h5>
                <div className='flex flex-col space-y-3'>

                            {offers?.map((i:any)=>{
                                    const item=cart?.find((o:any)=>o.id===i?.productID)
                                return(
                                    <>
                                    <div className='flex  justify-between'>
                                                <h5 className='text-[14px] text-[#5B5B5B] w-[80%]'>Group buying goal is to buy {i.minQty} units of {item?.productName}</h5>
                                                <h5 className='font-light text-green-500 text-[14px]'>{i?.offeredDiscount}% off</h5>

                                            </div>
                                            {/* <div className='flex items-center justify-between'>
                                                <h5 className='text-[14px] text-[#5B5B5B]'>Achieve goal in 24 hours</h5>
                                                <h5 className='font-light text-green-500 text-[14px]'>20% off</h5>
                                        </div> */}

                                    </>
                                )
                            })

                            }
                </div>
            </div>
            <hr></hr>

            <div className='w-full flex flex-col'>
                {/* <div className='flex items-center justify-between py-3'>
                    <h5 className=' text-lg'>End</h5>
                    <h5 className='font-bold text-red-500 text-xl'>18h : 47m : 36s</h5>

                </div> */}

                <div className='flex items-center justify-between py-7'>
                    <h5 className=' text-lg'>Total price:</h5>
                    <h5 className='font-bold text-3xl'>${totalDiscount}</h5>
                </div>
            </div>
        </div>
    )
}





const OrderSummary = ({ cart, processPayment, loading, total ,offers,totalDiscount}: any) => {
    const [selectedOption, setSelectedOption] = useState<string>("Free shipping");
return (
    <div className='w-full bg-[#F3F3F3] px-8 space-y-4 py-6 rounded-lg'>
        <h5 className='font-[600] text-[18px]'>Order Summary</h5>
        <div className='flex flex-col space-y-2'>
            <h5 className='text-[18px] font-[500] text-[#5B5B5B]'>Item Total</h5>
            <div className='flex flex-col space-y-1'>
                    {cart?.map((c:any)=>{
                        return(
                        <div className='flex items-center justify-between '>
                            <h5 className='font-[500] text-[#E62F34] text-[18px]'>{c?.qty} ({c?.price})</h5>
                            <h5 className='font-[500] text-[#E62F34]  text-[20px]'>${c.qty*c.price}</h5>
            
                        </div>
                        )
                    }) }
            </div>
   
            <h5 className='text-[24px] font-[600] text-[#2D2D2D]'>Shipping</h5>
               {
                [
                  {
                    label:"Free shipping",
                  },
                  {
                    label:"Pickup Location(free)",
                
                  }
                ].map((i)=>{
                     return(
                     <ShippingOption
                        key={i.label}
                        i={i}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                      />
                     )
                })
               }
        </div>

        <div className='w-full flex flex-col'>
            <div className='flex items-center justify-between py-7'>
                <h5 className=' text-lg'>Total price:</h5>
                <h5 className='font-bold text-[32px]'>${totalDiscount}</h5>
            </div>
 

            <button
                className='text-white py-3 space-x-4 px-4 bg-[#009E4D] rounded-xl flex justify-center items-center w-full text-lg font-bold'
                onClick={processPayment}>
                {
                    loading ?
                        <ClipLoader size={12} color="white" />
                        :
                        "Pay"
                }
            </button>
        </div>

    </div>
)
}


const ShippingOption=({ i, selectedOption, setSelectedOption }: any)=>{
        const [radio,setRadio]=useState<string>("Free shipping")
        const [isModalOpen, setIsModalOpen] = useState(false);

 return(
    <>
  
    <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
            {selectedOption === i.label ? (
                <IoRadioButtonOn
                onClick={() => setSelectedOption(i.label)}
                className="text-[#D41A1F] text-lg cursor-pointer"
                />
            ) : (
                <IoRadioButtonOffSharp
                onClick={() => setSelectedOption(i.label)}
                className="text-[#D41A1F] text-lg cursor-pointer"
                />
            )}
            <h5>{i.label}</h5>
        </div>
        {i.label==="Free shipping"?
               <h5 className="font-light text-green-500 text-sm">${0.0}</h5>
                    :
                    <h5
                    className="font-light text-green-500 text-sm cursor-pointer"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Select schedule
                  </h5>
        }
            
  </div>
  <Modal cname={"w-[35%] rounded-lg bg-white"} trigger={isModalOpen} onClose={() => setIsModalOpen(false)}>
       <Scheduler />
  </Modal>
  
</>
   )
}

const Scheduler = () => {
        const [selectedDate, setSelectedDate] = useState<Date | null>(null);
        const [timeWindow, setTimeWindow] = useState<string>('');

        // Example of unavailable dates
        const unavailableDates = [
        new Date(2025, 1, 1),
        new Date(2025, 1, 2),
        new Date(2025, 1, 3),
        // Add more dates as needed
        ];

        const isDateAvailable = (date: Date) => {
        return !unavailableDates.some(
        (unavailableDate) =>
            unavailableDate.getDate() === date.getDate() &&
            unavailableDate.getMonth() === date.getMonth() &&
            unavailableDate.getFullYear() === date.getFullYear()
        );
        };

return (
<div className="max-w-md mx-auto text-center p-4">
        <h2 className="text-lg font-bold mb-2">Choose Your Delivery Date and Time Window.</h2>
        <p className="text-sm text-gray-600 mb-4">Select a convenient date and time window for your delivery.</p>
        <p className="text-sm text-gray-600 mb-4">Note: Grayed out dates are NOT available.</p>
        <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            filterDate={isDateAvailable}
            inline
        />
        <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Select a Time Window</label>
            <select
            className="block w-full mt-1 p-2 border border-gray-300 bg-white rounded-md"
            value={timeWindow}
            onChange={(e) => setTimeWindow(e.target.value)}
            >
            <option value="">Select an option</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
            </select>
        </div>
        <button
            className="mt-6 w-full py-2 bg-green-600 text-white rounded-md font-bold hover:bg-green-700"
            onClick={() => alert('Proceeding with selected date and time')}
        >
            Proceed
        </button>
</div>
);
};

