import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Shared/Services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Allproduct:any=[];
  Url='http://localhost:8866/'

  constructor(private ProductService:ProductService,private Router:Router){}

  ngOnInit():void{
    this.ProductService.GetAllProducts().subscribe((ResponsefromBackend:any)=>{
      this.Allproduct=ResponsefromBackend.Result;
      console.log(ResponsefromBackend)
    })
  }
  

}
