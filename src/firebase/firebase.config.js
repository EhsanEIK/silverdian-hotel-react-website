// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKlrpWlpUzd_DUpDi5sErzdKCn5ekGGsg",
    authDomain: "practice-auth-a9b1e.firebaseapp.com",
    projectId: "practice-auth-a9b1e",
    storageBucket: "practice-auth-a9b1e.appspot.com",
    messagingSenderId: "107386583037",
    appId: "1:107386583037:web:66438b142bc7cc938a4b94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;