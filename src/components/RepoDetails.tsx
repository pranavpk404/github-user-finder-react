import { UserRepoProps } from "../types";

const RepoDetails = ({ userRepo }: UserRepoProps) => {
  console.log(userRepo);
  const iconUrl =
    "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/";

  const truncateString = (str: string) => {
    str = str || "";
    if (str.length > 10) {
      return str.substring(0, 90) + "...";
    }
  };
  const changeToLowerCase = (str: string) => {
    str = str || "";
    return str.toLowerCase();
  };
  const checkLanguage = (language: string) => {
    if (language === "C++") {
      return "cpp";
    } else if (language === "C#") {
      return "csharp";
    } else {
      return language;
    }
  };
  return (
    <div className="">
      <h1 className="text-center text-2xl">Repositories</h1>
      <div className="flex flex-row flex-wrap justify-center">
        {userRepo.map((repo) => (
          <span
            className="flex bg-gray-700  rounded-xl p-2 m-5 space-y-5 text-gray-200 flex-col w-56 "
            key={repo.id}
          >
            <h4 className="repo-details-card-item">{repo.name}</h4>
            <img
              className="w-10 h-10"
              src={`${iconUrl}${changeToLowerCase(
                checkLanguage(repo.language)
              )}.svg`}
              alt={repo.language}
            />
            <a
              rel="noopener noreferrer"
              target="_BLANK"
              href={repo.html_url}
              className="text-blue-500"
            >
              Link To Repository
            </a>
            <h5 className="text-sm">{truncateString(repo.description)}</h5>
          </span>
        ))}
      </div>
    </div>
  );
};

export default RepoDetails;
