import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
        /** The user's id. */
        id: string
      } & DefaultSession["user"],
    /** The user's access token. */
    accessToken: string,
    /** The user's refresh token. */
    refreshToken: string,
    /** The user's roles. */
    roles: string[],
    error?: string
  }
}