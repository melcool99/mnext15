export default async function Cool() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-8 p-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>

        <div className="grid gap-8 lg:grid-cols-2">
          <section className="flex flex-col gap-4 p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold">Quick Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col p-4 bg-blue-500 rounded-md">
                <span className="text-sm text-black">Total Projects</span>
                <span className="text-3xl font-bold">24</span>
              </div>
              <div className="flex flex-col p-4 bg-green-500 rounded-md">
                <span className="text-sm text-black">Active Tasks</span>
                <span className="text-3xl font-bold">12</span>
              </div>
              <div className="flex flex-col p-4 bg-purple-500 rounded-md">
                <span className="text-sm text-black">Team Members</span>
                <span className="text-3xl font-bold">8</span>
              </div>
              <div className="flex flex-col p-4 bg-yellow-500 rounded-md">
                <span className="text-sm text-black">Hours Logged</span>
                <span className="text-3xl font-bold">164</span>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4 p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold">Recent Activity</h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-3 bg-gray-500 rounded-md">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="text-sm">
                  New project &quot;Dashboard UI&quot; created
                </p>
                <span className="ml-auto text-xs text-black">2h ago</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-500 rounded-md">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="text-sm">
                  Task &quot;Design Review&quot; completed
                </p>
                <span className="ml-auto text-xs text-black">5h ago</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-5000 rounded-md">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <p className="text-sm">New team member Sarah joined</p>
                <span className="ml-auto text-xs text-black">1d ago</span>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4 p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold">Upcoming Deadlines</h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between p-3 border-l-4 border-red-500 bg-gray-500">
                <div>
                  <p className="font-medium">Website Redesign</p>
                  <p className="text-sm text-black">Due in 2 days</p>
                </div>
                <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded">
                  High Priority
                </span>
              </div>
              <div className="flex items-center justify-between p-3 border-l-4 border-yellow-500 bg-gray-500">
                <div>
                  <p className="font-medium">Content Strategy</p>
                  <p className="text-sm text-black">Due in 5 days</p>
                </div>
                <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">
                  Medium Priority
                </span>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4 p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold">Team Performance</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Project Completion Rate</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Task Success Rate</span>
                  <span className="text-sm font-medium">92%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-green-600 rounded-full"
                    style={{ width: '92%' }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
