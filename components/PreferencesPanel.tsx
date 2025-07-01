import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setCategories } from '../features/preferences/preferencesSlice';

const availableCategories = ['technology', 'sports', 'finance', 'movies', 'music'];

export default function PreferencesPanel() {
  const selected = useSelector((state: RootState) => state.preferences.categories);
  const dispatch = useDispatch();

  const toggleCategory = (category: string) => {
    const newCategories = selected.includes(category)
      ? selected.filter((c) => c !== category)
      : [...selected, category];

    dispatch(setCategories(newCategories));
  };

  const clearPreferences = () => {
    dispatch(setCategories(['technology', 'sports']));
    localStorage.removeItem('categories');
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Select Categories
        </h2>
        <button
          onClick={clearPreferences}
          className="text-sm text-red-600 hover:underline"
        >
          Reset
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {availableCategories.map((category) => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`px-3 py-1 rounded border ${
              selected.includes(category)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
