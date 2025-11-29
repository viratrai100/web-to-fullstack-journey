import type { NextPage } from "next";

// import {preloadTodos} from "../todos/page";
import { preloadTodos } from "./todos/page";

const DashboardPage: NextPage = () => {
    preloadTodos();
    return (
        <div>
            <h1 className="text-4xl font-bold">Helllo ! From Dashboard Page</h1>
        </div>
    )
}

export default DashboardPage;