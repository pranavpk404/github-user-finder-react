import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import UserDetails from "./components/UserDetails";
import RepoDetails from "./components/RepoDetails";

function App() {
  const [searched, setSearched] = useState(false);
  const [userName, setUserName] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  const [userRepo, setUserRepo] = useState([]);

  useEffect(() => {
    const getUserDetails = async () => {
      let url = `https://api.github.com/users/${userName}`;
      let data = await fetch(url);
      let resp = await data.json();
      setUserDetails(resp);
    };
    const getUserRepo = async () => {
      let url = `https://api.github.com/users/${userName}/repos`;
      let data = await fetch(url);
      let resp = await data.json();
      setUserRepo(resp);
    };

    if (searched) {
      getUserDetails();
      getUserRepo();
    } else {
      setUserDetails([]);
      setUserRepo([]);
    }
  }, [userName]);

  return (
    <>
      <SearchBar setUserName={setUserName} setSearched={setSearched} />
      <UserDetails userDetails={userDetails} />
      <RepoDetails userRepo={userRepo} />
    </>
  );
}

export default App;
