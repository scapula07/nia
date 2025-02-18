import { auth, db } from "@/firebase/config";
import { doc, getDoc, setDoc, updateDoc, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import axios from "axios";
const host = globalThis?.window?.location?.origin;

export const orderApi = {
    create: async function (products: any, user: any, customer: any) {
        try {
            const orders = {};

            const orderPromises = products.map(async (product: any) => {
                const total = parseFloat(product.price); // Total price for the order is just the price of the product
                const orderID = `ORD-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

                // Check if an order for this product already exists
                const ordersQuery = query(
                    collection(db, "orders"),
                    where("product.id", "==", product.id) // Check if the product already has an order
                );

                const querySnapshot = await getDocs(ordersQuery);

                if (!querySnapshot.empty) {
                    // If an order already exists, update it by adding the new customer
                    const existingOrder = querySnapshot.docs[0];
                    const existingOrderData = existingOrder.data();

                    // Check if the customer is already in the order's customer list
                    const customerExists = existingOrderData.customers?.some(
                        (c: any) => c.id === customer.id
                    );

                    if (!customerExists) {
                        // Add the new customer to the order's customer list
                        await updateDoc(existingOrder.ref, {
                            customers: [...(existingOrderData.customers || []), customer], // Append the new customer
                            qty: (existingOrderData.qty || 0) + product.qty, // Increase quantity
                            total: (parseFloat(existingOrderData.total) + total).toFixed(2), // Update total
                        });
                    } else {
                        // If the customer already exists in the order, just update the quantity and total
                        await updateDoc(existingOrder.ref, {
                            qty: (existingOrderData.qty || 0) + product.qty, // Increase quantity
                            total: (parseFloat(existingOrderData.total) + total).toFixed(2), // Update total
                        });
                    }

                    return existingOrder.ref; // Return the updated order reference
                } else {
                    // If no order exists, create a new one with the customer added to the list
                    const snap = await addDoc(collection(db, "orders"), {
                        product, // Place the product in an array to match the structure of orders
                        orderID,
                        creator: user?.id,
                        status: "active",
                        total: total.toFixed(2), // Round total to 2 decimal places
                        paid: false,
                        time: Number(new Date()),
                        deliveryStatus: "pending",
                        shipmentId: "",
                        customers: [customer], // Initialize the customer list with the new customer
                        qty: product.qty, // Add quantity to the order
                    });

                    // Update product quantity in the inventory
                    try {
                        const ref = doc(db, "products", product?.id);
                        const docSnap = await getDoc(ref);
                        const newQty = Number(docSnap?.data()?.qty) - Number(product?.qty);

                        await updateDoc(doc(db, "products", product?.id), {
                            qty: newQty,
                        });

                        // Clear the user's cart
                        await updateDoc(doc(db, "bucket", user?.id), {
                            cart: [],
                        });
                    } catch (e) {
                        console.log(e);
                    }

                    return snap; // Return the new order reference
                }
            });

            return Promise.all(orderPromises);
        } catch (e) {
            console.log(e);
            throw new Error("Failed to create or update orders");
        }
    },

    checkout:async function (products:any,id:string) {
        console.log(host,"host")
          try{
              const url=`${host}/api/stripe`
              const config = {
                headers:{
                    'Content-Type': 'application/json',
                    },
                };
              const response= await axios.post(
                        url,
                        {
                         products,
                         orderId:id
                        },
                        config
                  )
                  console.log(response,"response")
                  return response?.data?.session
           }catch(e){
                console.log(e)
           }
      
      }
};
