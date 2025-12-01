import { getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function DashboardPage() {
    const {getUser} = getKindeServerSession();
    const user =  await getUser();
    console.log("User", user);
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div>
                <h1 className="text-4xl font-bold">Dashboard</h1>
                <h3>Hey {user?.given_name} {user?.family_name} - {user?.email}</h3>
            </div>
            <LogoutLink className="bg-blue-700 p-3 rounded-lg m-4" >Log out</LogoutLink>
        </div>
    );
}