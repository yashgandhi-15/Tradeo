import React from "react";

const RecentSearches = () => {
  const searches = ["Nifty50", "TCS", "Sun Pharma", "HDFC"];

  return (
    <div className="mt-6 bg-gray-100 dark:bg-gray-800 rounded p-4">
      <h2 className="font-bold mb-2">Recent Searches</h2>
      <ul>
        {searches.map((item, index) => (
          <li key={index} className="text-sm text-gray-600 dark:text-gray-400 py-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
