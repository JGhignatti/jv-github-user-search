import { SearchResponseJson } from '../models/search-response.json';
import { SearchResponse } from '../models/search-response.model';

export const searchResponseJson: SearchResponseJson = {
  total_count: 10,
  items: [{
    login: 'login-1',
    avatar_url: 'avatar-url-1',
    html_url: 'html-url-1',
  }],
};

export const searchResponse: SearchResponse = {
  total: 10,
  items: [{
    username: 'login-1',
    avatarUrl: 'avatar-url-1',
    url: 'html-url-1',
  }],
};
