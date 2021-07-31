import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchStateService } from './services/search-state.service';
import { GithubSearchService } from './services/github-search.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let debugEl: DebugElement;

  let searchState: SearchStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      declarations: [
        AppComponent,
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;

    searchState = TestBed.inject(SearchStateService);

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should disable button when input is invalid', () => {
    const button = debugEl.query(By.css('button')).nativeElement as HTMLButtonElement;
    expect(button.disabled).toBeTruthy();
  });

  it('should enable button when input is valid', () => {
    component.searchControl.setValue('abc');

    fixture.detectChanges();

    const button = debugEl.query(By.css('button')).nativeElement as HTMLButtonElement;
    expect(button.disabled).toBeFalsy();
  });

  it('should call search on button click', () => {
    jest.spyOn(searchState, 'search').mockImplementation();
    component.searchControl.setValue('abc');

    fixture.detectChanges();
    debugEl.query(By.css('button')).triggerEventHandler('click', null);

    expect(searchState.search).toHaveBeenCalledWith('abc');
  });
});
