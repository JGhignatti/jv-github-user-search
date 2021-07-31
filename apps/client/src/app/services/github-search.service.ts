import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SearchResponse } from '../models/search-response.model';
import { SearchResponseJson } from '../models/search-response.json';

@Injectable({
  providedIn: 'root',
})
export class GithubSearchService {

  private readonly baseUrl = 'https://api.github.com/search/users';
  private readonly headers = new HttpHeaders({ Accept: 'application/vnd.github.v3+json' });

  constructor(private http: HttpClient) {
  }

  search(search: string, page: number): Observable<SearchResponse> {
    const params = new HttpParams({
      fromObject: {
        q: search,
        per_page: 20,
        page,
      },
    });

    return this.http.get<SearchResponseJson>(this.baseUrl, { headers: this.headers, params })
      .pipe(
        map(result => SearchResponse.from(result)),
      );
  }
}
