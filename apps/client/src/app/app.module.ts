import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './containers/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
  ],
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
