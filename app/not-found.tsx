'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-8">
      <h2 className="text-2xl text-gray-600">{`Page ${pathname.slice(
        1
      )} not found`}</h2>
      <p className="text-gray-500">
        {`The page${pathname.slice(
          1
        )} you're looking for doesn't exist or has been moved.`}
      </p>
      <button
        onClick={() => router.push('/')}
        className="px-4 py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Return Home
      </button>
    </div>
  );
}
