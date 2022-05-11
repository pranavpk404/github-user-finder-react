function UserDetails({ userDetails }) {
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
        alt="ecommerce"
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
        <div className="flex flex-col space-y-2">
          <span className="mb-2 underline flex flex-row">
            <img src="https://img.icons8.com/ios/24/000000/marker--v1.png" />
            <p>{location}</p>
          </span>
          <span className="mb-2 underline flex flex-row">
            <img src="https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/24/000000/external-internet-culture-and-communities-smashingstocks-hand-drawn-black-smashing-stocks.png" />
            <p>{blog}</p>
          </span>
          <span className="mb-2 underline flex flex-row">
            <img src="https://img.icons8.com/ios/24/000000/twitter--v2.png" />
            <p>@{twitter_username}</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
