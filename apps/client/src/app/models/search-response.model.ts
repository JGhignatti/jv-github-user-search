import { SearchResponseJson, UserJson } from './search-response.json';

export class SearchResponse {
  total!: number;
  items!: User[];

  static from(searchResponseJson: SearchResponseJson): SearchResponse {
    const response = new SearchResponse();

    response.total = searchResponseJson.total_count;
    response.items = searchResponseJson.items.map(userJson => User.from(userJson));

    return response;
  }
}

export class User {
  username!: string;
  avatarUrl!: string;
  url!: string;

  static from(userJson: UserJson): User {
    const user = new User();

    user.username = userJson.login;
    user.avatarUrl = userJson.avatar_url;
    user.url = userJson.html_url;

    return user;
  }
}
