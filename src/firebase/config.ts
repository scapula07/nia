import { initializeApp } from "firebase/app";
import { getAnalytics,logEvent } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrCENUz9kqcpOMagWaVL54U0mTaD8GZxM",
  authDomain: "reach-nft-auction.firebaseapp.com",
  projectId: "reach-nft-auction",
  storageBucket: "reach-nft-auction.appspot.com",
  messagingSenderId: "300939093898",
  appId: "1:300939093898:web:d39387f5f4d54eebf48a73",
  measurementId: "G-8MB09JQGVY"
};



const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db=getFirestore()