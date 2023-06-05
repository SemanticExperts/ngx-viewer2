import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgxViewer2Module} from "../../projects/ngx-viewer2/src/lib/ngx-viewer2.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxViewer2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
