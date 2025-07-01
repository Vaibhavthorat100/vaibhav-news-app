import { Moon, Sun } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '@/redux/slices/preferencesSlice'
import { RootState } from '@/redux/store'

export default function Header() {
  const dispatch = useDispatch()
  const darkMode = useSelector((state: RootState) => state.preferences.darkMode)

  return (
    <header className="w-full h-16 px-6 flex items-center justify-between border-b bg-white dark:bg-gray-900 dark:text-white shadow">
      <h1 className="text-xl font-bold">Vaibhav News</h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 outline-none"
        />
        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  )
}
