import { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import{ getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth"
import { getFirestore } from 'firebase/firestore';

const FirebaseContext = createContext(null);

// const firebaseConfig = {
//   apiKey: "AIzaSyAIZ3zR-SCfm6BXGVNpfR85LJD_odKHvNo",
//   authDomain: "bookify-76d56.firebaseapp.com",
//   projectId: "bookify-76d56",
//   storageBucket: "bookify-76d56.firebasestorage.app",
//   messagingSenderId: "89493886783",
//   appId: "1:89493886783:web:ca0b5f21eb92627ffaa58a"
// };

const firebaseConfig = {
  apiKey: "AIzaSyD_-NkilMLI2xz9d81NvsiPDEHH6kY0S8U",
  authDomain: "bookify-a1b6c.firebaseapp.com",
  projectId: "bookify-a1b6c",
  storageBucket: "bookify-a1b6c.firebasestorage.app",
  messagingSenderId: "927464951633",
  appId: "1:927464951633:web:edacca17a5acc4c0a6cd70"
};


export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

const firebasestore = getFirestore(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      // console.log("User", user);
      if (user) setUser(user);
      else setUser(null);
    })
  }, [])


  const signupUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(firebaseAuth, email, password);

  const signinUserWithEmailAndPass = (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password);

  const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  const handleCreateNewListing = (name, isbn, price, cover) => {  }

  const isLoggedIn = user ? true : false;

    return <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, signinUserWithEmailAndPass, signinWithGoogle, handleCreateNewListing, isLoggedIn}} >{props.children}</FirebaseContext.Provider>
};