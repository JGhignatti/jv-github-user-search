import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { User } from '../../models/search-response.model';

@Component({
  selector: 'jv-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {

  @Input() user!: User;
}
