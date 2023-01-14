import { Card } from "flowbite-react";

export default function Jobslist() {
  return (
    <div className="max-w-sm">
      <Card className="mb-5">
        <div className="flex items-center space-x-4">
          <div className="min-w-0 flex-1">
            <p className="truncate text-xl font-medium text-purple-700 dark:text-white">
              Urban Decay
            </p>
            <p className="truncate text-lg text-green-500 dark:text-gray-400">
              Jasmine
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            100%
          </div>
        </div>

        <div className="flex items center justify-between">
          <span className="text-xl font-bold text-purple-700 dark:text-white">
            741235
          </span>
          <a
            href="#"
            className="rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Edit
          </a>
        </div>
      </Card>
    </div>
  );
}
