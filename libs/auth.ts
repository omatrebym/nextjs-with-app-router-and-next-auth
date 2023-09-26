import { NextAuthOptions } from "next-auth";

import OneLoginProvider from "next-auth/providers/onelogin";

// TODO:
// - Legg til redirect etter signin gjennom state(?)
// - Tokens for API-er(?)

// Husk å legge til Redirect URI i OneLogin Applications -> Configuration:
// <base URL>/api/auth/callback/onelogin
export const authOptions: NextAuthOptions = {
  providers: [
    OneLoginProvider({
      clientId: process.env.ONELOGIN_CLIENT_ID,
      issuer: process.env.ONELOGIN_ISSUER,
      authorization: {
        url: `${process.env.ONELOGIN_ISSUER}/oidc/2/auth}`,
        params: {
          scope: "openid profile email groups params",
          response_type: "code",
        },
      },
      token: `${process.env.ONELOGIN_ISSUER}/oidc/2/token`,
      checks: ["pkce", "state"],
      client: { token_endpoint_auth_method: "none" },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
};
