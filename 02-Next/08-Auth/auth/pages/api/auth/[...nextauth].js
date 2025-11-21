import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Ov23lijEELkT0yB4iS0x",
      clientSecret: "e3b5a57011ff76fdf3071dd3a105531210756126",
    }),
  ],
};

export default NextAuth(authOptions);