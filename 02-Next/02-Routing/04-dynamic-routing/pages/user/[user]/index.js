// user -> " Any Name" -> setting =>  user/virat/setting

import { useEffect } from "react";
import { useRouter } from "next/router";

// const useUser = () => ({ user: null, loading: false});
const useUser = () => ({ user: {name: "Virat"}, loading: false});

const UserNamePage = () => {
  const router = useRouter();

  const user = useUser();

  console.log("Router", router);

  useEffect(() => {
    if(user.user == null) {
        router.replace("/");
    }
  }, [router, user.user]);

  return (
    <div>
      <h1>This is Index For {router.query.user}</h1>
      {/* <button
        onClick={(e) => router.push(`/user/${router.query.user}/settings`)}
      >
        Open Settings Page
      </button> */}
      <button
        onClick={(e) =>
          router.push({
            pathname: "/user/[user]/settings",
            query: { user: router.query.user },
          })
        }
      >
        Open Settings Page
      </button>
      {/* <button onClick={(e) => router.push("/")}>Go To Home</button> */}
       {/* router.replace -> history nahi banne deta directly redirect kar detahai page pe */}
      <button onClick={(e) => router.replace("/")}>Go To Home</button>
      <button onClick={(e) => router.reload()}>Reload</button>
    </div>
  );
};

export default UserNamePage;
