import { db } from "@/firebase/config";
import { Description } from "@chakra-ui/react/dist/types/components/alert/namespace";
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";

/**
 * Adds an offer to Firestore.
 */
export const addOffer = async (
    productID: string,
    productPrice: string,
    discountPrice: string,
    stock: string,
    description: string
) => {
    try {

        const docRef = await addDoc(collection(db, "offers"), {
            aggregateCommitment: 0,
            createdAt: new Date(),
            description: description,
            offeredDiscount: ((parseInt(discountPrice) / parseFloat(productPrice)) * 100),
            productID,
            productPrice: parseFloat(productPrice),
            discountPrice: parseFloat(discountPrice),
            members: [],
            totalUnits: parseInt(stock),
            unitSold: 0,
        });
        console.log("Offer added with ID:", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error adding offer:", error);
        throw error;
    }
};

export const getOffers = async () => {
    try {
        const offersCollection = collection(db, "offers");
        const offersSnapshot = await getDocs(offersCollection);
        const offers = [];

        for (const offerDoc of offersSnapshot.docs) {
            const offerData = offerDoc.data();
            const productID = offerData.productID;
            let productName = "Unknown Product";
            let productImage = "";

            if (productID) {
                try {
                    const productRef = doc(db, "products", productID);
                    const productSnap = await getDoc(productRef);
                    if (productSnap.exists()) {
                        const productData = productSnap.data();
                        productName = productData.name || "Unknown Product";
                        productImage = productData.image || "";
                    }
                } catch (error) {
                    console.error(`Error fetching product details for ID ${productID}:`, error);
                }
            }

            offers.push({
                id: offerDoc.id,
                productID,
                productName,
                productImage,
                productPrice: offerData.productPrice,
                discountPrice: offerData.discountPrice,
                stock: offerData.goalQuantity,
                date: offerData.createdAt.toDate(),
            });
        }

        return offers;
    } catch (error) {
        console.error("Error fetching offers:", error);
        throw error;
    }
};

export const getProductByID = async (productID: string) => {
    try {
        if (!productID) {
            throw new Error("Invalid product ID");
        }

        const productRef = doc(db, "products", productID);
        const productSnap = await getDoc(productRef);

        if (!productSnap.exists()) {
            console.error("No product found with ID:", productID);
            return null;
        }

        return {
            id: productSnap.id,
            ...productSnap.data(),
        };
    } catch (error) {
        console.error("Error fetching product:", error);
        throw error;
    }
};
