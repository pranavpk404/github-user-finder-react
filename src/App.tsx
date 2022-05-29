import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RepoDetails from "./components/RepoDetails";
import UserDetails from "./components/UserDetailsfsa.js";

function App() {
  const [searched, setSearched] = useState(false);
  const [userName, setUserName] = useState("");
  const [userDetails, setUserDetails] = useState({
    avatar_url: "",
    blog: "",
    bio: "",
    html_url: "",
    location: "",
    login: "",
    name: "",
    twitter_username: "",
  });
  const [userRepo, setUserRepo] = useState([]);

  useEffect(() => {
    const getUserDetails = async () => {
      let url = `https://api.github.com/users/${userName}`;
      let data = await fetch(url);

      let user = await data.json();
      if (user.message === "Not Found") {
        alert("User not found");
        setUserDetails({
          avatar_url: "",
          blog: "",
          bio: "",
          html_url: "",
          location: "",
          login: "",
          name: "",
          twitter_username: "",
        });
      } else {
        setUserDetails(user);
      }
    };
    const getUserRepo = async () => {
      let url = `https://api.github.com/users/${userName}/repos`;
      let data = await fetch(url);

      let resp = await data.json();
      if (resp.message === "Not Found") {
        setUserRepo([]);
      } else {
        setUserRepo(resp);
      }
    };

    if (searched) {
      getUserDetails();
      getUserRepo();
    } else {
      setSearched(true);
      setUserName("pranavpk404");
    }
  }, [userName]);

  return (
    <main className="font-Poppins bg-gray-900 text-white">
      <SearchBar setUserName={setUserName} setSearched={setSearched} />
      <UserDetails userDetails={userDetails} />
      <RepoDetails userRepo={userRepo} />
    </main>
  );
}

export default App;
