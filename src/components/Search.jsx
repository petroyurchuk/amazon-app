import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { searchCategories } from "../utils";
import { callAPI } from "../utils/CallApi";
const Search = () => {
  const [suggestions, setSuggestions] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [category, setCategory] = React.useState("All");
  const navigate = useNavigate();

  const getSuggestions = () => {
    callAPI("data/suggestions.json").then((suggestionResults) => {
      setSuggestions(suggestionResults);
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category,
        searchTerm,
      })}`,
    });
    setSearchTerm("");
    setCategory("All");
  };

  React.useEffect(() => {
    getSuggestions();
  }, []);
  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amazonClone-yellow rounded">
        <select
          className="p-2 bg-gray-300 text-black border text-xs xl:text-sm"
          onChange={(e) => setCategory(e.target.value)}
        >
          {searchCategories.map(({ id, value }) => (
            <option key={id} value={value}>
              {value}
            </option>
          ))}
        </select>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex grow items-center h-[100%] rounded-l text-black"
          type="text"
        />
        <button onClick={onHandleSubmit} className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      {suggestions && (
        <div className="bg-white text-black w-full z-40 absolute">
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => setSearchTerm(suggestion.title)}
              >
                {suggestion.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
export default Search;