import { Injectable } from '@angular/core';

import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { User } from '../models/search-response.model';
import { GithubSearchService } from './github-search.service';

@Injectable({
  providedIn: 'root'
})
export class SearchStateService {

  private _pages$ = new BehaviorSubject<Map<number, User[]>>(new Map<number, User[]>());
  private _loading$ = new BehaviorSubject<boolean>(false);
  private _error$ = new BehaviorSubject<boolean>(false);

  private _total$ = new BehaviorSubject<number>(0);
  private _currentPage$ = new BehaviorSubject<number>(1);
  private _currentSearch$ = new BehaviorSubject<string>('');

  constructor(private githubSearchService: GithubSearchService) {
  }

  get list$(): Observable<User[] | undefined> {
    return combineLatest([
      this._pages$.asObservable(),
      this.currentPage$,
    ])
      .pipe(map(([pages, currentPage]) => pages.get(currentPage)));
  }

  get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  get error$(): Observable<boolean> {
    return this._error$.asObservable();
  }

  get total$(): Observable<number> {
    return this._total$.asObservable();
  }

  get currentPage$(): Observable<number> {
    return this._currentPage$.asObservable();
  }

  get currentSearch$(): Observable<string> {
    return this._currentSearch$.asObservable();
  }

  search(value: string) {
    this._currentPage$.next(1);
    this._currentSearch$.next(value);

    this.getPage();
  }

  loadPage(page: number) {
    this._currentPage$.next(page);

    if (!this._pages$.value.has(page)) {
      this.getPage();
    }
  }

  retry() {
    this.getPage();
  }

  private getPage() {
    this._loading$.next(true);
    this._error$.next(false);

    this.githubSearchService.search(this._currentSearch$.value, this._currentPage$.value)
      .pipe(finalize(() => this._loading$.next(false)))
      .subscribe(
        response => {
          const pages = this._pages$.value;
          pages.set(this._currentPage$.value, response.items);

          this._pages$.next(pages);
          this._total$.next(response.total);
        },
        () => this._error$.next(true),
      );
  }
}
