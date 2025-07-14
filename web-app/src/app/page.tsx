'use client';

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {session ? (
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Welcome, {session.user?.name}!</h1>
            <p className="text-gray-600">{session.user?.email}</p>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Not signed in</h1>
            <button
              onClick={() => signIn('google')}
              className="px-4 py-2 bg-blue-500 text-gray rounded hover:bg-blue-600"
            >
              Sign in with Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
