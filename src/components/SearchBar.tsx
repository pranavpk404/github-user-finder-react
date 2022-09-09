import { useState } from "react";
import { SearchBarProps } from "../types";

const SearchBar = ({ setUserName, setSearched }: SearchBarProps) => {
  const [text, setText] = useState("");
  const search = () => {
    setSearched(true);
    setUserName(text);
  };
  return (
    <div className="p-5 flex justify-between">
      <img
        src="https://img.icons8.com/plasticine/48/000000/github.png"
        alt="icon"
      />
      <span>
        <input
          type="text"
          id="searchBar"
          className="sm:w-96 w-80 h-10 bg-gray-800  rounded-full shadow-sm outline-none p-6 text-white hover:shadow-lg"
          placeholder="Search Github"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              search();
            }
          }}
        />
        <button onClick={search} id="searchBtn" className="-m-11">
          🔎
        </button>
      </span>
    </div>
  );
};

export default SearchBar;
