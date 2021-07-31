import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SearchStateService } from './search-state.service';
import { GithubSearchService } from './github-search.service';

describe('SearchStateService', () => {
  let service: SearchStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        GithubSearchService,
      ],
    });

    service = TestBed.inject(SearchStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
