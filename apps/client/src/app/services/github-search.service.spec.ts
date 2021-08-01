import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GithubSearchService } from './github-search.service';
import { searchResponse, searchResponseJson } from '../utils/test';

describe('GithubSearchService', () => {
  let httpTestingController: HttpTestingController;
  let service: GithubSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(GithubSearchService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('search', () => {
    it('should get and parse information', () => {
      service.search('abc', 1)
        .subscribe(response => {
          expect(testRequest.request.method).toBe('GET');
          expect(testRequest.request.params.get('q')).toBe('abc');
          expect(testRequest.request.params.get('page')).toBe('1');
          expect(response).toEqual(searchResponse);
        });

      const testRequest = httpTestingController.expectOne(req => req.url.includes('search/users'));

      testRequest.flush(searchResponseJson);
    });
  });
});
