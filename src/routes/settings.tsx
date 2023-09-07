import { GoBack } from '../components/ui/go-back'

export function Settings() {
  return (
    <div>
      <header className="flex items-baseline ">
        <GoBack />
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
          Settings
        </h1>
      </header>
      <form action="" className="mt-4 flex flex-col gap-5 ">
        <input
          placeholder="Pomodoro"
          type="text"
          className="rounded-md border border-gray-200 bg-gray-100 px-4 py-2 shadow-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:placeholder:text-gray-400"
        />
        <input
          placeholder="Short Break"
          type="text"
          className="rounded-md border border-gray-200 bg-gray-100 px-4 py-2 shadow-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:placeholder:text-gray-400"
        />
        <input
          placeholder="Long Break"
          type="text"
          className="rounded-md border border-gray-200 bg-gray-100 px-4 py-2 shadow-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:placeholder:text-gray-400"
        />
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
          Alarm
        </h2>
      </form>
    </div>
  )
}
