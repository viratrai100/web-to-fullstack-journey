import React from 'react'
// import { getFirestore } from "firebase/firestore";
import { getFirestore, collection, addDoc, doc, getDoc, query, where, getDocs, updateDoc } from "firebase/firestore";
import { app } from './firebase';
import './App.css'

const firestore = getFirestore(app);

function App() {

  const writeData = async () => {
    const result = await addDoc(collection(firestore, "cities"), {
      name: "Noida",
      pincode: 112233,
      lat: 123,
      long: 456,
    });

    console.log("Result", result);
  }
  // fagLZvRgbZNkGybVa4ho
  const makeSubCollection = async () => {
    await addDoc(collection(firestore, "cities/fagLZvRgbZNkGybVa4ho/places"), {
      name: "This Is Beta 2",
      // name: "This Is Delta",
      desc: "Awesome Area",
      date: Date.now(),
    });
  }

  // by id
  const getDocument = async () => {
    const ref = doc(firestore, "cities", "fagLZvRgbZNkGybVa4ho");
    const snap = await getDoc(ref);

    console.log(snap.data());
  }

  // by query 
  const getDocumentsByQuery = async () => {
    const collectionRef = collection(firestore, "users");
    const q = query(collectionRef, where("isMale", "==", true));
    const snapshot = await getDocs(q);
    snapshot.forEach((data) => console.log(data.data()));
  }

  // update 
  const update = async () => {
    const docRef = doc(firestore, "cities", "fagLZvRgbZNkGybVa4ho");
    await updateDoc(docRef, {
      name: "Greater Noida"
    })
  }

  return (


    <div>
      {/* <h1>Mai H1 Hu</h1> */}
      <h1>Firebase Firestore</h1>
      <button onClick={writeData}>Put Data</button>
      <button onClick={makeSubCollection}>Put Sub Data</button>
      <button onClick={getDocument}>Get Document</button>
      <button onClick={getDocumentsByQuery}>Get Documents By Query</button>
      <button onClick={update}>Update</button>
    </div>
  )
}

export default App
