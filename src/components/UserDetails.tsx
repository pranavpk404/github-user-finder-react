import { UserDetailsProps } from "../types";

const UserDetails = ({ userDetails }: UserDetailsProps) => {
  const {
    blog,
    bio,
    avatar_url,
    html_url,
    location,
    login,
    name,
    twitter_username,
  } = userDetails;
  return (
    <div className="m-5 flex flex-wrap justify-around lg:justify-start">
      <img
        alt="avatar"
        className="w-64 items-center h-64 object-cover object-center rounded-full"
        src={avatar_url}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <a
          href={html_url}
          target="_BLANK"
          className="text-sm title-font text-gray-300 tracking-widest"
        >
          @{login}
        </a>
        <h1 className="text-gray-400 text-3xl title-font font-medium mb-1">
          {name}
        </h1>
        <p className="leading-relaxed mb-3">{bio}</p>
        <div className="flex flex-col space-y-3">
          <span className="mb-2 underline flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <p>{location}</p>
          </span>
          <span className="mb-2 underline flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                clipRule="evenodd"
              />
            </svg>
            <p>{blog}</p>
          </span>
          <span className="mb-2 underline flex flex-row">
            <img src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png" />
            <p>@{twitter_username}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
