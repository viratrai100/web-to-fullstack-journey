import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import { app } from "./firebase";
import SignupPage from "./pages/signup";
import SigninPage from "./pages/Signin";
import './App.css'
import { useEffect, useState } from "react";

const auth = getAuth(app);

function App() {


const [user, setUser] = useState(null);

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // yes, you are logged in 
      // console.log("Hello", user);
      setUser(user);
    } else {
      // User is logged out
      console.log("You are Logged Out");
      setUser(null);
    }
  });
}, []);



  if (user === null) {
   return (
    <div className="app">
      {/* <h1>Testing React Model</h1>
      <button onClick={signupUser}>Create User</button> */}
      <SignupPage />
      <SigninPage />
    </div>
  );
}


    return (
      <div className="App">
        <h1>Hello {user.email}</h1>
        <button onClick={() => signOut(auth)} >Logout</button>
      </div>
    );
}  

export default App;