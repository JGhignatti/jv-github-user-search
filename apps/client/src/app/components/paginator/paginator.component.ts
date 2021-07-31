import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'jv-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {

  @Input() currentPage!: number;

  @Output() pageChanged = new EventEmitter<number>();

  numOfPages!: number;

  @Input() set total(value: number) {
    this.numOfPages = Math.ceil(value / 20);
  }

  get toDisplayPages(): (number | string)[] {
    const result: (number | string)[] = [
      this.currentPage - 2,
      this.currentPage - 1,
      this.currentPage,
      this.currentPage + 1,
      this.currentPage + 2,
    ]
      .filter(page => page >= 1 && page <= this.numOfPages);

    if (result[0] !== 1) {
      if (result[0] !== 2) {
        result.unshift('...');
      }
      result.unshift(1);
    }

    if (result[result.length - 1] !== this.numOfPages) {
      if (result[result.length - 1] !== this.numOfPages - 1) {
        result.push('...');
      }
      result.push(this.numOfPages);
    }

    return result;
  }

  selectPage(page: number | string) {
    if (typeof page === 'number' && page !== this.currentPage) {
      this.pageChanged.emit(page);
    }
  }
}
