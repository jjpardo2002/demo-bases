import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContarModule } from './contar/contar.module';
import { ContarComponent } from './contar/contar/contar.component';
import { HeroeModule } from './heroe/heroe.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroeModule,
    ContarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
