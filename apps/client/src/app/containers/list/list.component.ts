import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { SearchStateService } from '../../services/search-state.service';
import { User } from '../../models/search-response.model';

@Component({
  selector: 'jv-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  list$!: Observable<User[] | undefined>;
  loading$!: Observable<boolean>;
  total$!: Observable<number>;
  currentPage$!: Observable<number>;
  currentSearch$!: Observable<string>;

  constructor(private searchState: SearchStateService) {
  }

  ngOnInit() {
    this.list$ = this.searchState.list$;
    this.loading$ = this.searchState.loading$;
    this.total$ = this.searchState.total$;
    this.currentPage$ = this.searchState.currentPage$;
    this.currentSearch$ = this.searchState.currentSearch$;
  }
}
