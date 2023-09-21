import NextAuth, { NextAuthOptions } from "next-auth";

import OneLoginProvider from "next-auth/providers/onelogin";

const authOptions: NextAuthOptions = {
  providers: [
    OneLoginProvider({
      clientId: process.env.ONELOGIN_CLIENT_ID,
      clientSecret: process.env.ONELOGIN_CLIENT_SECRET,
      issuer: process.env.ONELOGIN_ISSUER,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
