import React from "react";
import "./css/RepoDetails.css";

function RepoDetails({ userRepo }) {
  const iconUrl =
    "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/";

  const truncateString = (str) => {
    str = str || "";
    if (str.length > 90) {
      return str.substring(0, 90) + "...";
    }
  };
  const changeToLowerCase = (str) => {
    str = str || "";
    return str.toLowerCase();
  };
  const checkLanguage = (language) => {
    if (language === "C++") {
      return "cpp";
    } else if (language === "C#") {
      return "csharp";
    } else {
      return language;
    }
  };
  return (
    <div className="repo-details">
      <div className="repo-details-list">
        {userRepo.map((repo) => (
          <div className="repo-details-card" key={repo.id}>
            <h4 className="repo-details-card-item">{repo.name}</h4>
            <img
              className="repo-details-card-item repo-details-card-item-img"
              src={`${iconUrl}${changeToLowerCase(
                checkLanguage(repo.language)
              )}.svg`}
              alt={repo.language}
            />
            <a
              rel="noopener noreferrer"
              target="_BLANK"
              href={repo.html_url}
              className="repo-details-card-item htmlUrl"
            >
              Link To Repository
            </a>
            <h5 className="repo-details-card-item">
              {truncateString(repo.description)}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RepoDetails;
