import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MainModuleComponent } from './main-module/main-module.component';
// import { HeaderComponent } from './mainModule/mainModuleComponents/header/header.component';


@NgModule({
  declarations: [
    
  AppComponent,
    // MainModuleComponent,
            
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
