export interface SearchResponseJson {
  total_count: number;
  items: UserJson[];
}

export interface UserJson {
  login: string;
  avatar_url: string;
  html_url: string;
}
