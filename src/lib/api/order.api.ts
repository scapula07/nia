import { db } from "@/firebase/config";
import { doc, getDoc, setDoc, updateDoc, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import axios from "axios";
const host = globalThis?.window?.location?.origin;

export const orderApi = {
    createRegularOrder: async function (products: any, user: any, customer: any) {
        try {
            const orders = {};

            const orderPromises = products.map(async (product: any) => {
                const total = parseFloat(product.price); // Total price for the order is just the price of the product
                const orderID = `ORD-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
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
                    customer: customer?.id, // Initialize the customer list with the new customer
                    qty: product.qty, // Add quantity to the order
                    offerDeal: false, // Ensure new order has offerDeal
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
                
            });

            return Promise.all(orderPromises);
        } catch (e) {
            console.log(e);
            throw new Error("Failed to create or update orders");
        }
    },
    // createGroupOrder: async function (products: any, user: any, customer: any) {
    //     try {
    //         const orders = {};

    //         const orderPromises = products.map(async (product: any) => {
    //             const total = parseFloat(product.price); // Total price for the order is just the price of the product
    //             const orderID = `ORD-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

    //             // Check if an order for this product already exists
    //             const ordersQuery = query(
    //                 collection(db, "orders"),
    //                 where("product.id", "==", product.id) // Check if the product already has an order
    //             );

    //             const querySnapshot = await getDocs(ordersQuery);

    //             if (!querySnapshot.empty) {
               
    //                 // If an order already exists, update it by adding the new customer
    //                 const existingOrder = querySnapshot.docs[0];
    //                 const existingOrderData = existingOrder.data();
    //                 console.log(existingOrder.id)
    //                 // Check if the customer is already in the order's customer list
    //                 const customerExists = existingOrderData.customers?.some(
    //                     (c: any) => c === customer.id
    //                 );

    //                 if (!customerExists) {
    //                     // Add the new customer to the order's customer list
    //                     await updateDoc(existingOrder.ref, {
    //                         customers: [...(existingOrderData.customers || []), customer?.id], // Append the new customer
    //                         qty: (existingOrderData.qty || 0) + product.qty, // Increase quantity
    //                         total: (parseFloat(existingOrderData.total) + total).toFixed(2), // Update total
    //                     });
    //                 } else {
    //                     // If the customer already exists in the order, just update the quantity and total
    //                     await updateDoc(existingOrder.ref, {
    //                         qty: (existingOrderData.qty || 0) + product.qty, // Increase quantity
    //                         total: (parseFloat(existingOrderData.total) + total).toFixed(2), // Update total
    //                     });
    //                 }

    //                 return existingOrder.ref; // Return the updated order reference
    //             } else {
    //                 console.log("out")
    //                 // If no order exists, create a new one with the customer added to the list
    //                 const snap = await addDoc(collection(db, "orders"), {
    //                     product, // Place the product in an array to match the structure of orders
    //                     orderID,
    //                     creator: user?.id,
    //                     status: "active",
    //                     total: total.toFixed(2), // Round total to 2 decimal places
    //                     paid: false,
    //                     time: Number(new Date()),
    //                     deliveryStatus: "pending",
    //                     shipmentId: "",
    //                     customers: [customer?.id], // Initialize the customer list with the new customer
    //                     qty: product.qty, // Add quantity to the order,
    //                     offerDeal:true
    //                 });

    //                 // Update product quantity in the inventory
    //                 try {
    //                     const ref = doc(db, "products", product?.id);
    //                     const docSnap = await getDoc(ref);
    //                     const newQty = Number(docSnap?.data()?.qty) - Number(product?.qty);

    //                     await updateDoc(doc(db, "products", product?.id), {
    //                         qty: newQty,
    //                     });

    //                     // Clear the user's cart
    //                     await updateDoc(doc(db, "bucket", user?.id), {
    //                         cart: [],
    //                     });
    //                 } catch (e) {
    //                     console.log(e);
    //                 }

    //                 return snap; // Return the new order reference
    //             }
    //         });

    //         return Promise.all(orderPromises);
    //     } catch (e) {
    //         console.log(e);
    //         throw new Error("Failed to create or update orders");
    //     }
    // },
    createGroupOrder: async function (products: any, user: any, customer: any) {
        try {
            const orders = {};
    
            const orderPromises = products.map(async (product: any) => {
                const total = parseFloat(product.price);
                const orderID = `ORD-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    
                // Query existing orders for this product
                const ordersQuery = query(
                    collection(db, "orders"),
                    where("product.id", "==", product.id)
                );
    
                const querySnapshot = await getDocs(ordersQuery);
    
                if (!querySnapshot.empty) {
                    const existingOrder = querySnapshot.docs.find(
                        (doc) => doc.data().offerDeal === true // Ensure it has `offerDeal: true`
                    );
    
                    if (existingOrder) {
                        const existingOrderData = existingOrder.data();
    
                        // Check if the customer is already in the order
                        const customerExists = existingOrderData.customers?.some(
                            (c: any) => c === customer.id
                        );
    
                        if (!customerExists) {
                            await updateDoc(existingOrder.ref, {
                                customers: [...(existingOrderData.customers || []), customer?.id],
                                qty: (existingOrderData.qty || 0) + product.qty,
                                total: (parseFloat(existingOrderData.total) + total).toFixed(2),
                            });
                        } else {
                            await updateDoc(existingOrder.ref, {
                                qty: (existingOrderData.qty || 0) + product.qty,
                                total: (parseFloat(existingOrderData.total) + total).toFixed(2),
                            });
                        }
    
                        return existingOrder.ref;
                    }
                }
    
                // If no matching order exists with offerDeal: true, create a new order
                console.log("Creating new order...");
                const snap = await addDoc(collection(db, "orders"), {
                    product,
                    orderID,
                    creator: user?.id,
                    status: "active",
                    total: total.toFixed(2),
                    paid: false,
                    time: Number(new Date()),
                    deliveryStatus: "pending",
                    shipmentId: "",
                    customers: [customer?.id],
                    qty: product.qty,
                    offerDeal: true, // Ensure new order has offerDeal
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
    
                return snap;
            });
    
            return Promise.all(orderPromises);
        } catch (e) {
            console.log(e);
            throw new Error("Failed to create or update orders");
        }
    },
    
    checkout: async function (products: any, id: string) {
        console.log(host, "host")
        try {
            const url = `/api/checkout_sessions`
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const response = await axios.post(
                url,
                {
                    products,
                    orderId: id.toString()
                },
                config
            )
            console.log(response)

            return response
        } catch (e) {
            console.log(e)
        }

    },

    groupbuyCheckout: async function (newCart: any[], id: any) {
        console.log(host, "host")
        try {
            console.log("asdnasndamsnd,mansd,masnd")
            const url = `/api/groupbuy_checkout_sessions`
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const response = await axios.post(
                url,
                config
            )
            console.log(response)

            return response
        } catch (e) {
            console.log(e)
        }

    },

    editCustomer:async function (customerId:string,customer:any) {
        try{
            const ref =doc(db,"customers",customerId)
            const docSnap = await getDoc(ref);

            if (docSnap.exists()) {
                await updateDoc(doc(db,"customers",customerId), {
                    ...customer
                  })
                return true
            }else{
                await setDoc(doc(db, "customers", customerId), {
                    ...customer
                  })
                return true
            }
  
       }catch(e){
          console.log(e)
        }
    },
};
