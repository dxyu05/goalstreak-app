import NextAuth from "next-auth";
//import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// You can add more providers like Google, Facebook, etc.

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  // NEXTAUTH_SECRET is used automatically for JWT encryption
  secret: process.env.NEXTAUTH_SECRET,
  // NEXTAUTH_URL is used for callbacks
  callbacks: {
    async redirect({ url, baseUrl }) {
      // baseUrl is NEXTAUTH_URL
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error',
    // verifyRequest: '/auth/verify-request',
    // newUser: '/auth/new-user'
  },
});

export { handler as GET, handler as POST }; 