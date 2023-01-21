import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Shared/Services/product.service';

@Component({
  selector: 'app-products-analytics',
  templateUrl: './products-analytics.component.html',
  styleUrls: ['./products-analytics.component.css']
})
export class ProductsAnalyticsComponent {
  productArray:any=[]
  Url:string='http://localhost:8866/'
  particularProductData:any={}
  makeIdPublic:any=''
  updateProductForm:FormGroup| any;
  constructor(
    private ProductService:ProductService,
    private FormBuilder:FormBuilder
    ){ this.updateProductFormModel()}

  ngOnInit():void{this.populateProductArray()}

  populateProductArray(){
    this.ProductService.GetAllProducts().subscribe((ResponseComingFromBackend:any)=>{
      ResponseComingFromBackend.Result.forEach((element:any) => {
        if(element.softDeleteStatus!==1){
          this.productArray.push(element);
        }
      });
    })
  }
  updateProductFormModel(){
    this.updateProductForm = this.FormBuilder.group({
      productName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      quantity: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      description: new FormControl('', Validators.required),
      color: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      companyName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      category: new FormControl('', Validators.required),
      // size: new FormArray([])
    })
  }

  getParticularData(_id:any){
    this.makeIdPublic = _id;
    this.ProductService.GetProductById(_id).subscribe((res:any) => {
      this.particularProductData = res.Result;
      this.updateProductForm = this.FormBuilder.group({
        productName: new FormControl(this.particularProductData?.productname, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        quantity: new FormControl(this.particularProductData?.productquantity, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
        price: new FormControl(this.particularProductData?.productprice, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
        description: new FormControl(this.particularProductData?.description, Validators.required),
        color: new FormControl(this.particularProductData?.color, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
        companyName: new FormControl(this.particularProductData?.companyname, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
        category: new FormControl(this.particularProductData?.productcateogary, Validators.required),
        // size: new FormArray([])
      })
    })
  }

  deleteProduct(_id:any){
    this.ProductService.DeleteProductById(_id).subscribe((res:any) => {
      // this._ToastrService.error(res.Message);
      this.productArray = [];
      this.populateProductArray();
    })
  }
  hardDeleteProduct(_id:any){
    this.ProductService.HardDeleteProductById(_id).subscribe(res => {
      res;
      //add toastr
      this.productArray = [];
      this.populateProductArray();
    })
  }

  Update(){}

  getImage(event:any){}

  UpdateImage(productId:any, oldImageDetails:any){}
}
