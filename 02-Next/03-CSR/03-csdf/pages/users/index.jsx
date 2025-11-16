// import { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const UserPage = () => {

    const {data, error} = useSWR('https://dummyjson.com/users', fetcher);

    console.log("Data", data);

    if(error) {
        return <h1>Error Happened!</h1>;
    }

    if(!data) return <h1>Loading....</h1>


//   const [users, setUsers] = useState([]);

//   console.log("Users", users);

//   useEffect(() => {
//     async function FetchUsers() {
//       const data = await fetch("https://dummyjson.com/users");
//       setUsers(await data.json());
//     }
//     FetchUsers();
//   }, []);

  return (
    <div>
      <h1>User</h1>
      {data.users && // agar user hai
    //    data.users.users && // aur user ke andar user hai to hi render karna
       data.users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <div>{user.firstName}</div>
          </Link>
        ))}
    </div>
  );
};

export default UserPage;
