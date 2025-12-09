import { createContext, useContext, useEffect, useState } from 'react';
import {initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { getDatabase, set, ref, get, child, onValue } from "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyDRmxvvncREsMHMQDqXJkRFsGcp1Idcwys",
  authDomain: "app-c6389.firebaseapp.com",
  projectId: "app-c6389",
  storageBucket: "app-c6389.firebasestorage.app",
  messagingSenderId: "791873430134",
  appId: "1:791873430134:web:c09a9a56915636ab0e7557",
  databaseURL: "https://app-c6389-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);


export const FirebaseProvider = (props) => {

    const [name, setName] = useState("");

    const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword (firebaseAuth, email, password);
    }

    const putData = (key, data) => set(ref(database, key), data);

    // get(child(ref(database), "Grandfather/father")).then(snapshot => {
    // get(child(ref(database), "Grandfather")).then(snapshot => {
    //     console.log(snapshot.val());
    // })

    useEffect(() => {
      onValue(ref(database, "Grandfather/father/child"), (snapshot) =>
       // console.log(snapshot.val())
       setName(snapshot.val().name)
     );
 }, [])

    return (
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, putData }} >
            <h3>name is {name}</h3>
            {props.children}
        </FirebaseContext.Provider>
    );
}
