import { auth, db } from "@/firebase/config";
import { doc, getDoc, setDoc, updateDoc, collection, addDoc, deleteDoc, getDocs, where, or, query, orderBy } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage"
import Papa from "papaparse";


export const productApi= {
    addToCart:async function (product:any,user:any,quantity:number,offerId:string) {
      
      const { qty, ...rest } = product;
        try{
              const ref =doc(db,"bucket",user?.id)
              const docSnap = await getDoc(ref);
              console.log(docSnap.data(),"data")
              if(docSnap?.data()?.cart?.some((item:any)=>item?.id==product?.id)){
                    return true
                  }else{
                      await updateDoc(doc(db,"bucket",user?.id), {
                     cart:[...docSnap?.data()?.cart,{qty:quantity,...rest,offerId}]
                  })
                return true

            }
        } catch (e:any) {
            console.log(e)
            throw new Error(e.message)
        }
    },
    uploadCSV: async function (file: File) {
        return new Promise((resolve, reject) => {
            Papa.parse(file, {
                header: true, // Treat first row as column headers
                skipEmptyLines: true,
                complete: async function (results: { data: any; }) {
                    try {
                        const productsRef = collection(db, "products");
                        console.log("asdasdasdasd")

                        for (const product of results.data) {
                            console.log(product)
                            await addDoc(productsRef, {
                                productName: product.ProductName,
                                price: parseFloat(product.Price),
                                description: "N/A",
                                categories: product.Category,
                                image: product.ProductImage,
                                quantity: parseInt(product.Stock, 10),
                            });
                        }

                        resolve("CSV upload successful!");
                    } catch (error) {
                        reject(error);
                    }
                },
                error: function (error: any) {
                    reject(error);
                },
            });
        });
    },
    filterProducts:async function (filters:string[]) {
        try{
          const q = query(
            collection(db, 'products'),where('categories', 'in', filters));

             const products:any[]= [];
  
             const querySnapshot = await getDocs(q);
              querySnapshot.forEach((doc) => {
              
                console.log(doc.id, " => ", doc.data());
                products.push({...doc?.data(),id:doc?.id});
              });
                console.log(products,"o")
              return products

        }catch(e){
          console.log(e)
        }
      },
      findPrice:async function (prices:any) {
        try{
          const q = query(
            collection(db, 'products'),
              or(where('price', '>', prices?.low),
                where('price', '<', prices?.high)
                ),orderBy('createdAt', 'desc')
             );

             const products:any[]= [];
  
             const querySnapshot = await getDocs(q);
              querySnapshot.forEach((doc) => {
              
                console.log(doc.id, " => ", doc.data());
                products.push({...doc?.data(),id:doc?.id});
              });

              return products

        }catch(e){
          console.log(e)
        }

      },
    }