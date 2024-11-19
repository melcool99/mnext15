export default function Profile() {
  return (
    <div className="flex flex-col gap-8 p-8 max-w-screen-md">
      <h1 className="text-4xl font-bold">Profile</h1>

      <div className="flex flex-col gap-6">
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Personal Information</h2>
          <div className="grid gap-2">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                className="p-2 border rounded-md"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                className="p-2 border rounded-md"
                placeholder="john@example.com"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Preferences</h2>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Enable notifications</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Subscribe to newsletter</span>
            </label>
          </div>
        </section>

        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-fit">
          Save Changes
        </button>
      </div>
    </div>
  );
}
