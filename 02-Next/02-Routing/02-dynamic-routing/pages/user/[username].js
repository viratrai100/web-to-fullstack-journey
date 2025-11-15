import { useRouter } from "next/router";

const DynamicPage = () => {

    // const router = useRouter();
    // console.log("Router", router);
    const { query } = useRouter();

    return (
        <div>
            {/* <h1>This is a [username] Page</h1>           */}
            <h1>This is { query.username} Page</h1>          
        </div>
    );
}

export default DynamicPage;