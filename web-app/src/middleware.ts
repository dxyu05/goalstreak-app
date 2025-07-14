import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/login",
  },
});

export const config = {
  matcher: [
    // No routes are protected for now
    // Add protected routes here when you need them
    // Example: "/dashboard/:path*", "/profile/:path*"
  ],
}; 