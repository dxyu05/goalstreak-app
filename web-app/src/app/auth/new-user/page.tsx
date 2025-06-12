'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NewUserPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect to home if not a new user
    if (session?.user) {
      router.push('/');
    }
  }, [session, router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Welcome to Our App!</h2>
          <p className="mt-4 text-gray-600">
            We're excited to have you on board. Let's get started by setting up your profile.
          </p>
          <div className="mt-8">
            <button
              onClick={() => router.push('/')}
              className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
            >
              Continue to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 