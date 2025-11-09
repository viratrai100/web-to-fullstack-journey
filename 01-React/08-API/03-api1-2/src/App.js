import { useEffect, useState } from "react";
import { getPosts, getRandomUser } from "./api";
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // getPosts().then((posts) => console.log(posts));
    getPosts().then((posts) => setData(posts));
  }, []);

  useEffect(() => {
    // getRandomUser().then((user) => console.log(user));
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, []);

  console.log(userData);

  const refresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }

  return (
    <div className="App">
      { userData && <UserCard data={userData} />}
      <button onClick={refresh} >Refresh User</button>
      {/* <h1>Title ka data hai</h1>
      {data ? data.map((e) => <li>{e.title}</li>) : <p> No Data</p>}
      <h1>Yaha se niche sb body ka data hai</h1>
      {data ? data.map((e) => <li>{e.body}</li>) : <p> No Data</p>} */}
      {data ? (
        data.map((e) => <PostCard title={e.title} body={e.body} />)
      ) : (
        <p> No Data</p>
      )}
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
