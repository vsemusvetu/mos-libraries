import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LibrarySearchComponent } from './components/library-search/library-search.component';
import { LibraryDetailsComponent } from './components/library-details/library-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrarySearchComponent,
    LibraryDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }