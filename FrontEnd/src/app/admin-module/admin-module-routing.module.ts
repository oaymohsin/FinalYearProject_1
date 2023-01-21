import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-module-components/dashboard/dashboard.component';
import { ProductsAnalyticsComponent } from './admin-module-components/products-analytics/products-analytics.component';
import { ProductsComponent } from './admin-module-components/products/products.component';
import { AdminModuleComponent } from './admin-module.component';

const routes: Routes = [
  { 
    // path: '', component:ManagementModuleComponent,
    // children:[
    //   { path:'sign-in', component:SignInComponent },
    //   { path:'sign-up', component:SignUpComponent},
      
    path:'', component:AdminModuleComponent,
    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'create-product',component:ProductsComponent},
      {path:'product-analytics',component:ProductsAnalyticsComponent}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
