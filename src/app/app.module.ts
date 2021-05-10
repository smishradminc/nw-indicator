import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NwIndicatorComponent } from './view/nw-indicator/nw-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    NwIndicatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
