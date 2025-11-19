import Link from "next/link";
import useSWR from "swr";

import styles from "../../styles/User.module.css";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const UserPage = () => {

    const {data, error} = useSWR('https://dummyjson.com/users', fetcher);

    console.log("Data", data);

    if(error) {
        return <h1>Error Happened!</h1>;
    }

    if(!data) return <h1>Loading....</h1>



  return (
    <div>
      <h1>User</h1>
      {data.users && // agar user hai
       data.users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            {/* <div className={styles.text}>{user.firstName}</div> */}
            <div className={styles["text-yellow"]}>{user.firstName}</div>
          </Link>
        ))}
    </div>
  );
};

export default UserPage;
