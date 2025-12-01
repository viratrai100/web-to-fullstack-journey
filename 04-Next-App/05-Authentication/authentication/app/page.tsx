import Image from "next/image";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Home() {
  return (
      <main className="flex justify-center items-center min-h-screen text-center">
        <div>
          <h1 className="text-3xl font-bold">This is my Kinde App</h1>
        <div className="mt-5">
          <RegisterLink className="bg-blue-700 p-3 rounded-lg m-4">Sign up</RegisterLink>
          <LoginLink className="bg-blue-700 p-3 rounded-lg m-4" >Sign in</LoginLink>
        </div>
        </div>
      </main>
  );
}
