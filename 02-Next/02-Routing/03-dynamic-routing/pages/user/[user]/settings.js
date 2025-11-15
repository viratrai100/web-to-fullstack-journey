// user -> " Any Name" -> setting =>  user/virat/setting

import { useRouter } from "next/router";

const Page = () => {
    const router = useRouter();
    console.log("Router", router);

    return (
        <div>
            <h1>This is Setting For { router.query.user}</h1>
        </div>
    );
};

export default Page;