import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

import { auth, db } from "../../firebase/config"
import { doc, getDoc, setDoc } from "firebase/firestore";
import { updatePassword } from "firebase/auth";

export const authApi = {
    register: async function (email: string, phoneNumber: string, password: string, name: string) {
        try {
            const credential = await createUserWithEmailAndPassword(auth, email, password)
            const user = credential.user
            const ref = doc(db, "users", user?.uid)
            await setDoc(ref, {
                id: user?.uid,
                email: email,
                phoneNumber: phoneNumber,
                name: name,
            })
            const docSnap = await getDoc(ref);
            if (docSnap.exists()) {
                await setDoc(doc(db, "bucket", user?.uid), {
                    notifications: false,
                    cart: [],
                    saved: [],
                    msg: false
                });
                return {
                    id: docSnap?.id,
                    ...docSnap?.data(),

                }
            }
        } catch (e: any) {
            throw new Error(e);
        }
    },
    login: async function (email: string, password: string) {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            const ref = doc(db, "users", response?.user?.uid)
            const docSnap = await getDoc(ref);
            if (docSnap.exists()) {
                return { id: docSnap?.id, ...docSnap?.data() }

            }
        } catch (e: any) {
            throw new Error(e);
        }
    },
    changePassword: async function (password: any) {
        const user = auth.currentUser;
        try {
            await updatePassword(user, password);
            return true
        } catch (e) {
            console.log(e)

            throw new Error(e)
        }
    }
}