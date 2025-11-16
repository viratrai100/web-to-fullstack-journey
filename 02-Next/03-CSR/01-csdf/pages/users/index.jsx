import { useEffect, useState } from "react";
import Link from "next/link";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  console.log("Users", users);

  useEffect(() => {
    async function FetchUsers() {
      const data = await fetch("https://dummyjson.com/users");
      setUsers(await data.json());
    }
    FetchUsers();
  }, []);

  return (
    <div>
      <h1>User</h1>
      {users && // agar user hai
        users.users && // aur user ke andar user hai to hi render karna
        users.users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <div>{user.firstName}</div>
          </Link>
        ))}
    </div>
  );
};

export default UserPage;
