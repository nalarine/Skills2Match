import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
// firebase config data
    apiKey: "AIzaSyBW-mCYc3Z117OqFYyBNPTOeApEMPuVgJc",
    authDomain: "auth-proj-88a53.firebaseapp.com",
    projectId: "auth-proj-88a53",
    storageBucket: "auth-proj-88a53.appspot.com",
    messagingSenderId: "105498573919",
    appId: "1:105498573919:web:e723a1e4609fd9f1726fea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)