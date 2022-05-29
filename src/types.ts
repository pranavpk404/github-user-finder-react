export type SearchBarProps = {
  setUserName: (user: string) => void;
  setSearched: (searched: boolean) => void;
};
export type UserDetailsProps = {
  userDetails: {
    blog: string;
    bio: string;
    avatar_url: string;
    html_url: string;
    location: string;
    login: string;
    name: string;
    twitter_username: string;
  };
};

export type UserRepoProps = {
  userRepo: {
    name: string;
    description: string;
    html_url: string;
    id: number;
    language: string;
  }[];
};
