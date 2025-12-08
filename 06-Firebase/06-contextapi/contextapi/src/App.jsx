import { useState } from 'react'
import './App.css'
import { useFirebase } from './context/Firebase';


function App() {

  const firebase = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log('Firebse', firebase);

  return (

    <div className="app">
      {/* <h1>Hello</h1> */}
      <h1>Firebase</h1>
      <input onChange={(e) => setEmail(e.target.value)} value={email}  type='email' placeholder='Enter Email' />
      <input onChange={(e) => setPassword(e.target.value)} value={password}   type='Password' placeholder='Enter Password' />
      <button onClick={() => {
        firebase.signupUserWithEmailAndPassword(email, password);
        firebase.putData("users/" + "viratrai", {email, password});
       }} >Signup</button>                     
    </div>
  );
}

export default App;
 