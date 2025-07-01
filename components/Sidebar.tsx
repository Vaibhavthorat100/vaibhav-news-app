export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 p-4">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Dashboard</h2>
      <nav>
        <ul className="space-y-2 text-gray-700 dark:text-gray-200">
          <li>🏠 Home</li>
          <li>🔥 Trending</li>
          <li>⭐ Favorites</li>
          <li>⚙ Settings</li>
        </ul>
      </nav>
    </aside>
  );
}
