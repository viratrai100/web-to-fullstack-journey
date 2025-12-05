import React from 'react';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from "../firebase";

const auth = getAuth(app);

const SigninPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signinUser = () =>  {
        signInWithEmailAndPassword(auth, email, password).then((value) => console.log("Signin Success"))
        .catch((err) => console.log(err));
    };
    
    return(
        <div className="signin-page">
            <h1>Signin Page</h1>
            <label>Enter Your Email</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email}  type="email" required placeholder='Enter Your Email Here' />
            <label>Enter Your Password</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password}  type="password" required placeholder='Enter Your Password Here' />
            <button onClick={signinUser}>Signin Me In</button>
        </div>
    )
}

export default SigninPage;