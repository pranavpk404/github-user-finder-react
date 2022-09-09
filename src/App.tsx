import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RepoDetails from "./components/RepoDetails";
import UserDetails from "./components/UserDetails";

const App = () => {
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
      try {
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
      } catch (error) {
        alert("server error");
      }
    };
    const getUserRepo = async () => {
      try {
        let url = `https://api.github.com/users/${userName}/repos`;
        let data = await fetch(url);

        let resp = await data.json();
        if (resp.message === "Not Found") {
          setUserRepo([]);
        } else {
          setUserRepo(resp);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (searched ) {
      getUserDetails();
      getUserRepo();
    }
  }, [userName]);

  return (
    <main className="font-Poppins first-letter:placeholder::bg-gray-900 text-white">
      <SearchBar setUserName={setUserName} setSearched={setSearched} />
      {searched ? (
        <>
          <UserDetails userDetails={userDetails} />
          <RepoDetails userRepo={userRepo} />
        </>
      ) : (
        <h1 className="text-center text-4xl my-52">Search for users</h1>
      )}
    </main>
  );
};

export default App;
