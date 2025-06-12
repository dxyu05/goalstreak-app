'use client';

import { useSearchParams } from 'next/navigation';

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-600">Authentication Error</h2>
          <p className="mt-2 text-gray-600">
            {error === 'AccessDenied' && 'You do not have permission to sign in.'}
            {error === 'Configuration' && 'There is a problem with the server configuration.'}
            {error === 'Verification' && 'The verification token has expired or has already been used.'}
            {!error && 'An unknown error occurred.'}
          </p>
        </div>
      </div>
    </div>
  );
} 