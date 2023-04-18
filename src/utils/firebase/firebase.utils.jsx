import {initializeApp} from 'firebase/app' ;
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
    } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFaTSVqT22ziEw4RsAHDdGqJH_1_mREt8",
    authDomain: "crn-clothing-db-6495e.firebaseapp.com",
    projectId: "crn-clothing-db-6495e",
    storageBucket: "crn-clothing-db-6495e.appspot.com",
    messagingSenderId: "1013379005263",
    appId: "1:1013379005263:web:2246540e8a101cbc0ce33a"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider)