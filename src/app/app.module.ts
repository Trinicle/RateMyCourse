import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassComponent } from './class/class.component';
import { UnversityComponent } from './unversity/unversity.component';

import { SharedModule } from './shared/shared.module';
import { NavbarModule } from './navbar/navbar.module';


@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    UnversityComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
