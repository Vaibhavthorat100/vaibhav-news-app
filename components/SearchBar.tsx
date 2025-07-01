import { useEffect, useState } from 'react';

export default function SearchBar({ onSearch }: { onSearch: (keyword: string) => void }) {
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('lastSearch');
    if (stored) {
      setKeyword(stored);
      onSearch(stored); // ✅ Auto search
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = keyword.trim();
    if (!trimmed) return;
    localStorage.setItem('lastSearch', trimmed); // ✅ Save to localStorage
    onSearch(trimmed);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search news..."
        className="px-3 py-2 rounded border w-full text-black"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}
