import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ChangeDetectionStrategy, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;
  let debugEl: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatorComponent],
    })
      .overrideComponent(
        PaginatorComponent,
        {
          set: { changeDetection: ChangeDetectionStrategy.Default },
        },
      )
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('set total', () => {
    it('should set exact #numOfPages on set', () => {
      component.total = 40;

      expect(component.numOfPages).toBe(2);
    });

    it('should set +1 #numOfPages on set', () => {
      component.total = 41;

      expect(component.numOfPages).toBe(3);
    });
  });

  describe('get toDisplayPages', () => {
    it('should get to display pages', () => {
      component.numOfPages = 3;
      component.currentPage = 1;

      expect(component.toDisplayPages).toEqual([1, 2, 3]);
    });

    it('should filter negative and over #numOfPages values', () => {
      component.numOfPages = 1;
      component.currentPage = 1;

      expect(component.toDisplayPages).toEqual([1]);
    });

    it('should add first page if it is not present', () => {
      component.numOfPages = 4;
      component.currentPage = 4;

      expect(component.toDisplayPages).toEqual([1, 2, 3, 4]);
    });

    it('should add first page and separator if first is not present and second item is not second page', () => {
      component.numOfPages = 5;
      component.currentPage = 5;

      expect(component.toDisplayPages).toEqual([1, '...', 3, 4, 5]);
    });

    it('should add last page if it is not present', () => {
      component.numOfPages = 4;
      component.currentPage = 1;

      expect(component.toDisplayPages).toEqual([1, 2, 3, 4]);
    });

    it(
      'should add separator and last page if last is not present and last but one item is not last but one page',
      () => {
        component.numOfPages = 5;
        component.currentPage = 1;

        expect(component.toDisplayPages).toEqual([1, 2, 3, '...', 5]);
      },
    );
  });

  describe('selectPage', () => {
    it('should not emit if argument is string', () => {
      jest.spyOn(component.pageChanged, 'emit');

      component.selectPage('...');

      expect(component.pageChanged.emit).not.toHaveBeenCalled();
    });

    it('should not emit if argument is same as #currentPage', () => {
      jest.spyOn(component.pageChanged, 'emit');
      component.currentPage = 1;

      component.selectPage(1);

      expect(component.pageChanged.emit).not.toHaveBeenCalled();
    });

    it('should emit if argument a number different than #currentPage', () => {
      jest.spyOn(component.pageChanged, 'emit');
      component.currentPage = 1;

      component.selectPage(2);

      expect(component.pageChanged.emit).toHaveBeenCalledWith(2);
    });
  });

  it('should add button class only if page is not separator', () => {
    jest.spyOn(component, 'toDisplayPages', 'get').mockReturnValue([1, '...']);

    fixture.detectChanges();

    const divs = debugEl.queryAll(By.css('div'));
    expect(divs[0].classes).toHaveProperty('button');
    expect(divs[1].classes).not.toHaveProperty('button');
  });

  it('should mark current page', () => {
    jest.spyOn(component, 'toDisplayPages', 'get').mockReturnValue([1, 2]);
    component.currentPage = 1;

    fixture.detectChanges();

    const divs = debugEl.queryAll(By.css('div'));
    expect(divs[0].classes).toHaveProperty('bg-indigo-400');
    expect(divs[1].classes).not.toHaveProperty('bg-indigo-400');
  });
});
