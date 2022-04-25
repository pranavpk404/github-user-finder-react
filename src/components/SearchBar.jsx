import React, { useEffect } from "react";
import "./css/SearchBar.css";
function SearchBar({ setUserName, setSearched }) {
  const search = () => {
    let userName = document.getElementById("searchBar").value;
    setSearched(true);
    setUserName(userName);
  };
  useEffect(() => {
    setSearched(true);
    setUserName("pranavpk404");
    document
      .getElementById("searchBar")
      .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
          document.getElementById("searchBtn").click();
        }
      });
  }, []);
  return (
    <>
      <div className="searchBarContainer">
        <input
          type="search"
          id="searchBar"
          placeholder="Search for Github Users"
        />
        <img
          id="searchBtn"
          onClick={search}
          alt="search"
          src="https://img.icons8.com/ios-filled/28/ffffff/search--v1.png"
        />
      </div>
    </>
  );
}

export default SearchBar;
