import {initializeApp} from 'firebase/app' ;
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
    } from 'firebase/auth';

    import {
        getFirestore,
        doc,
        getDoc,
        setDoc

    } from 'firebase/firestore'

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

  export const db = getFirestore();

 export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
 

  if(!userSnapshot.exists()){
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await setDoc (userDocRef,{
        displayName,
        email,
        createdAt
      });
    }catch(error){
      console.log('error creating the user', error.message)
    }

    
  }
  return userDocRef;
 }