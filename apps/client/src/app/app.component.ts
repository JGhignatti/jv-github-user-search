import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { SearchStateService } from './services/search-state.service';

@Component({
  selector: 'jv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  searchControl = new FormControl('', Validators.required);

  constructor(private searchState: SearchStateService) {
  }

  submit() {
    this.searchState.search(this.searchControl.value);
  }
}
