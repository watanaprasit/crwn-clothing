import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB-Im6GQfwyK3jm3BqR5XmBNpUZVJ543NA",
    authDomain: "crwn-clothing-db-57793.firebaseapp.com",
    projectId: "crwn-clothing-db-57793",
    storageBucket: "crwn-clothing-db-57793.firebasestorage.app",
    messagingSenderId: "977584156431",
    appId: "1:977584156431:web:27ef780578fa85caffd87a"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid );

    console.log(userDocRef);
    
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
           await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
           });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
  };
