import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { of } from 'rxjs';

import { ListComponent } from './list.component';
import { SearchStateService } from '../../services/search-state.service';
import { GithubSearchService } from '../../services/github-search.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let debugEl: DebugElement;

  let searchState: SearchStateService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      declarations: [
        ListComponent,
      ],
      providers: [
        SearchStateService,
        GithubSearchService,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;

    searchState = TestBed.inject(SearchStateService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render anything', () => {
    component.loading$ = of(false);
    component.error$ = of(false);
    component.currentSearch$ = of('');
    fixture.detectChanges();

    const loader = debugEl.query(By.css('jv-loader'));
    const error = debugEl.query(By.css('#error-container'));
    const list = debugEl.query(By.css('jv-paginator'));
    expect(loader).toBeFalsy();
    expect(error).toBeFalsy();
    expect(list).toBeFalsy();
  });

  describe('loader', () => {
    it('should show loader', () => {
      component.loading$ = of(true);
      fixture.detectChanges();

      const loader = debugEl.query(By.css('jv-loader'));
      expect(loader).toBeTruthy();
    });
  });

  describe('error', () => {
    beforeEach(() => {
      component.loading$ = of(false);
      component.error$ = of(true);

      fixture.detectChanges();
    });

    it('should show error', () => {
      const error = debugEl.query(By.css('#error-container'));
      expect(error).toBeTruthy();
    });

    it('should call #retry on click', () => {
      jest.spyOn(searchState, 'retry').mockImplementation();

      debugEl.query(By.css('#error-container > button')).triggerEventHandler('click', null);

      expect(searchState.retry).toHaveBeenCalled();
    });
  });

  describe('list', () => {
    beforeEach(() => {
      component.loading$ = of(false);
      component.error$ = of(false);
      component.currentSearch$ = of('abc');

      fixture.detectChanges();
    });

    it('should show list', () => {
      const list = debugEl.query(By.css('jv-paginator'));
      expect(list).toBeTruthy();
    });

    it('should call #loadPage on paginator change', () => {
      jest.spyOn(searchState, 'loadPage').mockImplementation();

      debugEl.query(By.css('jv-paginator')).triggerEventHandler('pageChanged', 1);

      expect(searchState.loadPage).toHaveBeenCalledWith(1);
    });
  });
});
