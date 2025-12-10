import { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import{ getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth"
import { getFirestore, collection, addDoc, Firestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from "firebase/storage"

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAIZ3zR-SCfm6BXGVNpfR85LJD_odKHvNo",
  authDomain: "bookify-76d56.firebaseapp.com",
  projectId: "bookify-76d56",
  storageBucket: "bookify-76d56.firebasestorage.app",
  messagingSenderId: "89493886783",
  appId: "1:89493886783:web:ca0b5f21eb92627ffaa58a"
};


export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

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

  console.log(user);

  const handleCreateNewListing = async (name, isbn, price, coverPic) => {
    const imageRef = ref(storage,`uploads/images${Date.now()}-${coverPic.name}`);
    const uploadResult = await uploadBytes(imageRef, coverPic);
    return await addDoc(collection(firestore, 'books'), {
      name,
      isbn,
      price,
      imageURL: uploadResult.ref.fullPath,
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    })
  };

  const isLoggedIn = user ? true : false;

    return <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, signinUserWithEmailAndPass, signinWithGoogle, handleCreateNewListing, isLoggedIn}} >{props.children}</FirebaseContext.Provider>
};