import { useEffect, useState } from "react";
import faker from "faker";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map(({ id, avatar, username, company }) => (
        <div key={id} className="flex items-center justify-between mt-3">
          <img
            className="w-10 h-10 rounded-full border p-[2px]"
            src={avatar}
            alt="suggested profiles"
          />
          <div className="flex-1">
            <h2 className="font-semibold text-sm">{username}</h2>
            <h3 className="text-xs text-gray-400">Works at {company.name}</h3>
          </div>
          <button className="text-xs text-blue-400 font-semibold">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
