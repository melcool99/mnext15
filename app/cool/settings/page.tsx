export default function Settings() {
  return (
    <div className="flex flex-col gap-8 p-8 ">
      <h1 className="text-4xl font-bold">Settings</h1>

      <div className="flex flex-col gap-6 max-w-2xl">
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Account Settings</h2>
          <div className="grid gap-2">
            <div className="flex flex-col">
              <label className="text-sm">Username</label>
              <input
                type="text"
                className="p-2 border rounded-md text-gray-800"
                placeholder="username"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm">Password</label>
              <input
                type="password"
                className="p-2 border rounded-md text-gray-800"
                placeholder="••••••••"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Display Settings</h2>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Dark Mode</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Compact View</span>
            </label>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Privacy</h2>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Make profile public</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Allow email notifications</span>
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
