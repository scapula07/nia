 
import { auth,db } from "@/firebase/config";
import { doc,getDoc,setDoc , updateDoc,collection,addDoc}  from "firebase/firestore";
import {getStorage, ref, uploadBytes } from "firebase/storage"


export const offerApi= {
    create:async function () {},
    join:async function (product:any,user:any,offer:any,qty:number) {
        try{
            const ref =doc(db,"offers",offer?.id)
            const docSnap = await getDoc(ref);
            const members=docSnap.data()?.members
            const unitSold=docSnap.data()?.unitSold
            const aggregateCommitment=docSnap.data()?.aggregateCommitment
            const totalCost=product.price * Number(qty)
            console.log(members,unitSold,aggregateCommitment,"o")
               await updateDoc(doc(db,"offers",offer?.id), {
                  members:[
                    ...members,
                    {
                      id:user?.id,
                      amount:totalCost,
                      checkoutStatus: "pending",
                      qty
                    },
       
                  ],
                  unitSold:unitSold+Number(qty),
                  aggregateCommitment:aggregateCommitment+1
                })

              return true
            }catch(e){
          console.log(e)
        }
    }
}