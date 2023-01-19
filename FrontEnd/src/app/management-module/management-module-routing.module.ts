import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './management-module-components/sign-in/sign-in.component';
import { SignUpComponent } from './management-module-components/sign-up/sign-up.component';
import { ManagementModuleComponent } from './management-module.component';
// import { SignInComponent } from './management-module-components/sign-in/sign-in.component';
// import { SignUpComponent } from './management-module-components/sign-up/sign-up.component';
// import { ManagementModuleComponent } from './management-module.component';

const routes: Routes = [
  { 
    // path: '', component:ManagementModuleComponent,
    // children:[
    //   { path:'sign-in', component:SignInComponent },
    //   { path:'sign-up', component:SignUpComponent},
      
    path:'', component:ManagementModuleComponent,
    children:[
      {path:'sign-in',component:SignInComponent},
      {path:'sign-up',component:SignUpComponent}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementModuleRoutingModule { }
