import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './containers/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    LoaderComponent,
    PaginatorComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
