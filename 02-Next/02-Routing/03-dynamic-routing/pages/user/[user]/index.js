// user -> " Any Name" -> setting =>  user/virat/setting

import { useRouter } from "next/router";

const UserNamePage = () => {
    const router = useRouter();
    console.log("Router", router);

    return (
        <div>
            <h1>This is Index For { router.query.user}</h1>
        </div>
    );
};

export default UserNamePage;