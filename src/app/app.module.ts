import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { alternativeIf } from './alternativeDirective';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    alternativeIf
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
