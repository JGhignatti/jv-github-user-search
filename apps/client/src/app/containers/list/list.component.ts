import { Component, OnInit } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';

import { SearchStateService } from '../../services/search-state.service';
import { User } from '../../models/search-response.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'jv-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  list$!: Observable<User[] | undefined>;
  loading$!: Observable<boolean>;
  error$!: Observable<boolean>;

  total$!: Observable<number>;
  currentPage$!: Observable<number>;
  currentSearch$!: Observable<string>;

  constructor(private searchState: SearchStateService) {
  }

  ngOnInit() {
    this.list$ = this.searchState.list$;
    this.loading$ = this.searchState.loading$;
    this.error$ = this.searchState.error$;

    this.total$ = this.searchState.total$;
    this.currentPage$ = this.searchState.currentPage$;
    this.currentSearch$ = this.searchState.currentSearch$;
  }

  get shouldShowError$(): Observable<boolean> {
    return combineLatest([this.loading$, this.error$])
      .pipe(map(([loading, error]) => !loading && error));
  }

  get shouldShowList$(): Observable<boolean> {
    return combineLatest([
      this.loading$,
      this.error$,
      this.currentSearch$,
    ])
      .pipe(map(([loading, error, search]) => !loading && !error && !!search));
  }

  onRetry() {
    this.searchState.retry();
  }
}
