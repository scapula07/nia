import { auth,db } from "@/firebase/config";
import { doc,getDoc,setDoc , updateDoc,collection,addDoc,deleteDoc,getDocs,where,or,query,orderBy}  from "firebase/firestore";
import {getStorage, ref, uploadBytes } from "firebase/storage"


export const productApi= {
    addToCart:async function (product:any,user:any) {
        console.log(user)
        try{
              const ref =doc(db,"bucket",user?.id)
              const docSnap = await getDoc(ref);
              console.log(docSnap.data(),"data")
              if(docSnap?.data()?.cart?.some((item:any)=>item?.id==product?.id)){
                    return true
                  }else{
                      await updateDoc(doc(db,"bucket",user?.id), {
                     cart:[...docSnap?.data()?.cart,{id:1,qty:1,...product}]
                  })
                return true

              }
         }catch(e){
            console.log(e)
         }
    },
}