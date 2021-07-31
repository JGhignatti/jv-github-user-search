import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

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

    // return this.http.get<SearchResponseJson>(this.baseUrl, { headers: this.headers, params })
    //   .pipe(
    //     map(result => SearchResponse.from(result)),
    //   );
    return of(JSON.parse(`{
      "total": 652771,
      "items": [
          {
              "username": "A",
              "avatarUrl": "https://avatars.githubusercontent.com/u/1410106?v=4",
              "url": "https://github.com/A"
          },
          {
              "username": "snyff",
              "avatarUrl": "https://avatars.githubusercontent.com/u/45491?v=4",
              "url": "https://github.com/snyff"
          },
          {
              "username": "Amichai",
              "avatarUrl": "https://avatars.githubusercontent.com/u/313874?v=4",
              "url": "https://github.com/Amichai"
          },
          {
              "username": "adulau",
              "avatarUrl": "https://avatars.githubusercontent.com/u/3309?v=4",
              "url": "https://github.com/adulau"
          },
          {
              "username": "adamwiggins",
              "avatarUrl": "https://avatars.githubusercontent.com/u/177?v=4",
              "url": "https://github.com/adamwiggins"
          },
          {
              "username": "tuzimoe",
              "avatarUrl": "https://avatars.githubusercontent.com/u/17731805?v=4",
              "url": "https://github.com/tuzimoe"
          },
          {
              "username": "aarizaq",
              "avatarUrl": "https://avatars.githubusercontent.com/u/62071?v=4",
              "url": "https://github.com/aarizaq"
          },
          {
              "username": "ngs",
              "avatarUrl": "https://avatars.githubusercontent.com/u/18631?v=4",
              "url": "https://github.com/ngs"
          },
          {
              "username": "AHXR",
              "avatarUrl": "https://avatars.githubusercontent.com/u/27564220?v=4",
              "url": "https://github.com/AHXR"
          },
          {
              "username": "alsayadii",
              "avatarUrl": "https://avatars.githubusercontent.com/u/1955591?v=4",
              "url": "https://github.com/alsayadii"
          },
          {
              "username": "yi-ge",
              "avatarUrl": "https://avatars.githubusercontent.com/u/6657330?v=4",
              "url": "https://github.com/yi-ge"
          },
          {
              "username": "outsideris",
              "avatarUrl": "https://avatars.githubusercontent.com/u/390146?v=4",
              "url": "https://github.com/outsideris"
          },
          {
              "username": "iptodays",
              "avatarUrl": "https://avatars.githubusercontent.com/u/15830996?v=4",
              "url": "https://github.com/iptodays"
          },
          {
              "username": "abdonrd",
              "avatarUrl": "https://avatars.githubusercontent.com/u/1007051?v=4",
              "url": "https://github.com/abdonrd"
          },
          {
              "username": "joshhartigan",
              "avatarUrl": "https://avatars.githubusercontent.com/u/5961708?v=4",
              "url": "https://github.com/joshhartigan"
          },
          {
              "username": "ufoym",
              "avatarUrl": "https://avatars.githubusercontent.com/u/2270240?v=4",
              "url": "https://github.com/ufoym"
          },
          {
              "username": "carsonoid",
              "avatarUrl": "https://avatars.githubusercontent.com/u/2973513?v=4",
              "url": "https://github.com/carsonoid"
          },
          {
              "username": "prodigeni",
              "avatarUrl": "https://avatars.githubusercontent.com/u/1476070?v=4",
              "url": "https://github.com/prodigeni"
          },
          {
              "username": "kkmonlee",
              "avatarUrl": "https://avatars.githubusercontent.com/u/6388711?v=4",
              "url": "https://github.com/kkmonlee"
          },
          {
              "username": "andydbc",
              "avatarUrl": "https://avatars.githubusercontent.com/u/31256170?v=4",
              "url": "https://github.com/andydbc"
          },
          {
              "username": "layershifter",
              "avatarUrl": "https://avatars.githubusercontent.com/u/14183168?v=4",
              "url": "https://github.com/layershifter"
          },
          {
              "username": "noidontdig",
              "avatarUrl": "https://avatars.githubusercontent.com/u/1229810?v=4",
              "url": "https://github.com/noidontdig"
          },
          {
              "username": "austinkelleher",
              "avatarUrl": "https://avatars.githubusercontent.com/u/3771924?v=4",
              "url": "https://github.com/austinkelleher"
          },
          {
              "username": "machinaut",
              "avatarUrl": "https://avatars.githubusercontent.com/u/79779?v=4",
              "url": "https://github.com/machinaut"
          },
          {
              "username": "abinoda",
              "avatarUrl": "https://avatars.githubusercontent.com/u/50083?v=4",
              "url": "https://github.com/abinoda"
          },
          {
              "username": "keesun",
              "avatarUrl": "https://avatars.githubusercontent.com/u/463657?v=4",
              "url": "https://github.com/keesun"
          },
          {
              "username": "liuwons",
              "avatarUrl": "https://avatars.githubusercontent.com/u/9864950?v=4",
              "url": "https://github.com/liuwons"
          },
          {
              "username": "antiface",
              "avatarUrl": "https://avatars.githubusercontent.com/u/1619852?v=4",
              "url": "https://github.com/antiface"
          },
          {
              "username": "maruel",
              "avatarUrl": "https://avatars.githubusercontent.com/u/75011?v=4",
              "url": "https://github.com/maruel"
          },
          {
              "username": "Alwahsh",
              "avatarUrl": "https://avatars.githubusercontent.com/u/3496597?v=4",
              "url": "https://github.com/Alwahsh"
          }
      ]
    }`)).pipe(delay(4000));
  }
}
