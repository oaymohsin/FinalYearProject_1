import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModuleComponent } from './main-module.component';
import { AccessoriesComponent } from './mainModuleComponents/accessories/accessories.component';
import { HomeComponent } from './mainModuleComponents/home/home.component';
import { ViewProductComponent } from './mainModuleComponents/view-product/view-product.component';

const routes: Routes = [
  { 
    path: '', component:MainModuleComponent,
    children:[
      { path:'', component:HomeComponent },
      { path:'home', component:HomeComponent },
      { path:'accessories', component:AccessoriesComponent},
      { path:'view-product/:Id', component:ViewProductComponent},


      // { path:'product', component:ProductsComponent },
      // { path:'about-us', component:AboutUsComponent },
      // { path:'check-out', component:CheckOutComponent },
      // { path:'edit-cart', component:EditCartComponent },
      // { path:'contact-us', component:ContactUsComponent },
      // { path:'purchase-successful', component:PurcahseSuccessfulComponent },
      // { path:'purchase-failed', component:PurcahseFailedComponent },
      // { path:'view-product/:Id', component:ViewProductComponent},
      // {path:'view-product-details/:Id',component:ViewProductDetailsComponent}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
