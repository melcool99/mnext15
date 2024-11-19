export default function Loading() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-8 p-8">
        <div className="h-8 w-48 bg-gray-200 animate-pulse rounded-md" />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4 p-6 border rounded-lg">
            <div className="h-6 w-32 bg-gray-200 animate-pulse rounded-md" />
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col p-4 bg-gray-200 animate-pulse rounded-md h-24"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 p-6 border rounded-lg">
            <div className="h-6 w-32 bg-gray-200 animate-pulse rounded-md" />
            <div className="flex flex-col gap-3">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-14 bg-gray-200 animate-pulse rounded-md"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 p-6 border rounded-lg">
            <div className="h-6 w-32 bg-gray-200 animate-pulse rounded-md" />
            <div className="flex flex-col gap-3">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="h-16 bg-gray-200 animate-pulse rounded-md"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 p-6 border rounded-lg">
            <div className="h-6 w-32 bg-gray-200 animate-pulse rounded-md" />
            <div className="space-y-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 animate-pulse rounded-md" />
                  <div className="h-2 w-full bg-gray-200 animate-pulse rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
