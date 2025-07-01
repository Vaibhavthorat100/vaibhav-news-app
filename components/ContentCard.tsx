// components/ContentCard.tsx
import React from "react";

interface ContentCardProps {
  item: {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt?: string;
    source?: { name: string };
  };
}

const ContentCard: React.FC<ContentCardProps> = ({ item }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
      {item.urlToImage && (
        <img
          src={item.urlToImage}
          alt={item.title}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold line-clamp-2">{item.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {item.description}
        </p>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>{item.source?.name}</span>
          <span>{new Date(item.publishedAt || '').toLocaleDateString()}</span>
        </div>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 hover:underline text-sm mt-2"
        >
          Read more →
        </a>
      </div>
    </div>
  );
};

export default ContentCard;
