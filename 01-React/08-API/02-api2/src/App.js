import { useEffect, useState } from "react";
import {  getRandomUser } from "./api";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // getRandomUser().then((user) => console.log(user));
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, []);

  console.log(userData);

  const refresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  };

  return (
    <div className="App">
      {userData && <UserCard data={userData} />}
      <button onClick={refresh}>Refresh User</button>
    </div>
  );
}

export default App;

// .forEach() → Sirf array ke har element par kaam karta hai, kuch return nahi karta.
// .map() → Har element par kaam karta hai aur naya array return karta hai.

//  UseEffect :- data tb fetch ho, jb ye component pehli baar mount ho (useeffect ke andar function ko call kar diya).
// fir post aya , aur humne post ko bhi console.log kar diya

// ab hume iss dta ko screen pe dikhana hai ?
// useState :-
