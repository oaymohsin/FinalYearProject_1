import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/Shared/Interafaces/productInterface';
import { ProductService } from 'src/app/Shared/Services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  public productObject:any={};
  public Url:string='http://localhost:8866/';
  constructor(
    private readonly ActivatedRoute: ActivatedRoute,
    private readonly ProductService: ProductService
  ){}
  ngOnInit(): void {
    this.GetDataFromBackend()
  }
  public GetDataFromBackend(){
    const parameterizedId=this.ActivatedRoute.snapshot.paramMap.get('Id');
    console.log(parameterizedId)
    this.ProductService.GetProductById(parameterizedId).subscribe((Response:any)=>{
      this.productObject=Response.Result;
    })
  }
}
