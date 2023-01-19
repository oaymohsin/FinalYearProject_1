import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { HeaderComponent } from './mainModuleComponents/header/header.component';
import { FooterComponent } from './mainModuleComponents/footer/footer.component';
import { HomeComponent } from './mainModuleComponents/home/home.component';
// import { RouterModule } from '@angular/router';
import { MainModuleComponent } from './main-module.component';
import { AccessoriesComponent } from './mainModuleComponents/accessories/accessories.component';
import { ViewProductComponent } from './mainModuleComponents/view-product/view-product.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AccessoriesComponent,
    ViewProductComponent,
    
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    // RouterModule
  ],
  exports:[HeaderComponent]
})
export class MainModuleModule { }
