import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { AdiosComponent } from './adios/adios.component';
import { CompHolaComponent } from './comp-hola/comp-hola.component';

@NgModule({
  declarations: [
    AppComponent,
    TestObservableComponent,
    AdiosComponent,
    CompHolaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
