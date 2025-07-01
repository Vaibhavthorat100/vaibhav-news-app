import Link from 'next/link'
import { Home, Flame, Star, Settings } from 'lucide-react'

const links = [
  { label: 'Home', icon: <Home size={20} />, href: '/' },
  { label: 'Trending', icon: <Flame size={20} />, href: '/trending' },
  { label: 'Favorites', icon: <Star size={20} />, href: '/favorites' },
  { label: 'Settings', icon: <Settings size={20} />, href: '/settings' },
]

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-r">
      <div className="p-6 text-2xl font-bold">Dashboard</div>
      <nav className="flex flex-col gap-3 p-4">
        {links.map(link => (
          <Link
            key={link.label}
            href={link.href}
            className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
          >
            {link.icon} {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
