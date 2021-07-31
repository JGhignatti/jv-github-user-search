import { Component, OnInit } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { SearchStateService } from '../../services/search-state.service';
import { User } from '../../models/search-response.model';

@UntilDestroy()
@Component({
  selector: 'jv-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  list$!: Observable<User[] | undefined>;
  loading$!: Observable<boolean>;
  error$!: Observable<boolean>;

  currentSearch$!: Observable<string>;

  total!: number;
  currentPage!: number;

  constructor(private searchState: SearchStateService) {
  }

  ngOnInit() {
    this.list$ = this.searchState.list$;
    this.loading$ = this.searchState.loading$;
    this.error$ = this.searchState.error$;

    this.currentSearch$ = this.searchState.currentSearch$;

    this.searchState.total$
      .pipe(untilDestroyed(this))
      .subscribe(total => this.total = total);
    this.searchState.currentPage$
      .pipe(untilDestroyed(this))
      .subscribe(page => this.currentPage = page);
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

  onPageChanged(page: number) {
    this.searchState.loadPage(page);
  }
}
