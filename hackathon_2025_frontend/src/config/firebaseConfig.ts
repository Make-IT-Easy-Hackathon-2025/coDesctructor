import firebase from "@react-native-firebase/app";
import { initializeApp } from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsGnU3iJk2gcJHVq8yIX8aAOCo41lZ97g",
    authDomain: "codestructor-2e493.firebaseapp.com",
    projectId: "codestructor-2e493",
    storageBucket: "codestructor-2e493.appspot.com", // ✅ Must end in .appspot.com
    messagingSenderId: "230175688140",
    appId: "1:230175688140:web:13c0d9bd2850e59090c969",
    measurementId: "G-M9RBB5XNF1",
};

const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Export Firebase services
export { firebaseApp, auth };
