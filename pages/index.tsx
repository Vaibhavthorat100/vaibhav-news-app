// pages/index.tsx
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchNews, fetchNewsByKeyword } from "../lib/newsApi";
import ContentCard from "../components/ContentCard";
import PreferencesPanel from "../components/PreferencesPanel";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const selectedCategory = useSelector((state: RootState) => state.preferences.category);
  const [newsData, setNewsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = searchQuery
        ? await fetchNewsByKeyword(searchQuery)
        : await fetchNews(selectedCategory);
      setNewsData(data);
    };
    getData();
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen transition-all duration-300">
      {/* Hero Banner */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-10 px-6 shadow text-center">
        <h1 className="text-4xl font-bold mb-2">📰 Vaibhav's News Dashboard</h1>
        <p className="text-md">Your personalized news, all in one place</p>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <SearchBar onSearch={(query) => setSearchQuery(query)} />
        </div>

        <div className="mb-8">
          <PreferencesPanel />
        </div>

        {/* News Cards Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.length > 0 ? (
            newsData.map((item: any, index: number) => (
              <ContentCard key={index} item={item} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 dark:text-gray-400">
              No news found. Try another category or keyword.
            </p>
          )}
        </section>
      </main>
    </div>
  );
};

export default HomePage;
