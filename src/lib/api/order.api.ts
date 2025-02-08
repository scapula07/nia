import { auth ,db} from "@/firebase/config";
import { doc,getDoc,setDoc , updateDoc,collection,addDoc}  from "firebase/firestore";
import {getStorage, ref, uploadBytes } from "firebase/storage"


export const orderApi= {
    create:async function (products:any,user:any,customer:any) {

        const orders = {};
      
     try{
                const orderPromises = products.map(async (product:any) => {
                      const total = parseFloat(product.price); // Total price for the order is just the price of the product
                      const orderID = `ORD-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
                
                      const snap = await addDoc(collection(db, "orders"), {
                        product, // Place the product in an array to match the structure of orders
                        orderID, 
                        creator: user?.id,
                        status: "active",
                        total: total.toFixed(2), // Round total to 2 decimal places
                        paid: false,
                        time: Number(new Date()),
                        deliveryStatus:"pending",
                        shipmentId:"",
                        customer
                      });


                        try{
                          const ref=doc(db,"products",product?.id)
                          const docSnap = await getDoc(ref);
                          const newQty=Number(docSnap?.data()?.qty)-Number(product?.qty)
                          
                              await updateDoc(doc(db,"products",product?.id),
                                {
                                  qty:newQty
                              
                                })

                              await updateDoc(doc(db,"bucket",user?.id), {
                                cart:[]
                              })
                         }catch(e){
                              console.log(e)
                            //   throw new Error(e)
                        }

                      return snap;
                    });


                
                    return Promise.all(orderPromises);
            
                  }catch(e){
                      console.log(e)
                    //   throw new Error(e)
                  }

 },
}