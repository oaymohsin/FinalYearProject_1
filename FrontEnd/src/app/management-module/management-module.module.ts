import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementModuleRoutingModule } from './management-module-routing.module';
// import { ManagementModuleComponent } from './management-module.component';
// import { SignInComponent } from './management-module-components/sign-in/sign-in.component';
// import { SignUpComponent } from './management-module-components/sign-up/sign-up.component';
import { HeaderComponent } from '../main-module/mainModuleComponents/header/header.component';
import { MainModuleModule } from '../main-module/main-module.module';
import { ManagementModuleComponent } from './management-module.component';
import { SignInComponent } from './management-module-components/sign-in/sign-in.component';
import { SignUpComponent } from './management-module-components/sign-up/sign-up.component';



@NgModule({
  declarations: [
   
    ManagementModuleComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ManagementModuleRoutingModule,
    // MainModuleModule,
    
  ]
})
export class ManagementModuleModule { }
