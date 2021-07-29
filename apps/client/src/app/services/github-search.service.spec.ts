import { TestBed } from '@angular/core/testing';

import { GithubSearchService } from './github-search.service';

describe('GithubSearchService', () => {
  let service: GithubSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
