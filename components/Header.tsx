export default function Header() {
  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b dark:border-gray-700 flex items-center justify-between px-6">
      <div className="text-lg font-semibold text-gray-900 dark:text-white">Welcome Vaibhav 👋</div>
      <div>
        <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Logout</button>
      </div>
    </header>
  );
}
