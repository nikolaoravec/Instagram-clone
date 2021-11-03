import React, { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";
import { useSession } from "next-auth/react";
function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);
  const { data: session } = useSession();

  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 
    rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black"
    >
      {session && (
        <Story
          avatar={session?.user?.image}
          username={session?.user?.username}
        />
      )}
      {suggestions.map(({ id, avatar, username }) => (
        <Story key={id} avatar={avatar} username={username} />
      ))}
    </div>
  );
}

export default Stories;
