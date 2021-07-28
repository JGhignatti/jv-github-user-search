import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'jv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  searchControl = new FormControl('');

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        untilDestroyed(this),
        debounceTime(800),
        distinctUntilChanged(),
      )
      .subscribe(value => {
        this.router.navigate([], {
          relativeTo: this.activatedRoute,
          queryParams: { s: value || null },
        });
      });
  }
}
