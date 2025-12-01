import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";
export const GET = handleAuth();



// import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
// import { NextRequest } from "next/server";

// export async function GET(request, {params}) {
//     const endpoint = params.kindeAuth;
//     return handleAuth(request, endpoint);
// }