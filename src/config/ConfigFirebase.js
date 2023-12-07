
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyAC-rlmnbWpnbVc7HgvL5gm4HUlgI_ebJI',
  authDomain: "react-ecomerce-5a84e.firebaseapp.com",
  projectId: "react-ecomerce-5a84e",
  storageBucket: "react-ecomerce-5a84e.appspot.com",
  messagingSenderId: "1079668892334",
  appId: "1:1079668892334:web:a0a6c87591eafbf09fc33f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


