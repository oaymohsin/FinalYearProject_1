import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { ConsoleReporter } from 'jasmine';
import { ProductService } from 'src/app/Shared/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @ViewChildren('checkBoxes') checkBoxes:QueryList<Element> | any;
  @ViewChild('fileselect') fileselect:ElementRef | any ;


  selectsize=["S","M","L","XL"];
  cateogaries=["Stationary","Bags","Others"]
  selectcolor=["Red","Green","Yellow","Blue"]
  createproductform: FormGroup | any;
  getsizearray:any=[]
  imageArray:any=[];

  constructor(
    private formBuilder:FormBuilder,
    private ProductService:ProductService
  ){this.buildform()}

buildform(){
  this.createproductform = this.formBuilder.group({
    productname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    productquantity: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    productprice: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    description: new FormControl('', Validators.required),
    color: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
    companyname: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
    productcateogary: new FormControl('', Validators.required),
    size: new FormArray([]),
    // productMaterial: new FormControl('', Validators.required)
  })
}
getsize(event:any){
    // this.createproductform.reset();
  event.target.checked ? this.getsizearray.push(event.target.value) : this.getsizearray.filter((value:any)=>value!=event.target.value) ;
  // console.log(event);
}

getImages(event:any){
  let filelength= event.target.files.length;
  if(filelength<=5){
    [...event.target.files].forEach(file=>this.imageArray.push(file));
    console.log(this.imageArray);
    console.log(this.fileselect)
  } else {
    this.imageArray=[];
    this.fileselect.nativeElement.value=null;

  }
}
  createproduct(){
    //creating form controls for every size
    // console.log(this.getsizearray)
    // console.log(this.createproductform.get('size').value)
    this.getsizearray.forEach((element:String) => {
      let formcontrol=new FormControl;
      this.createproductform.get("size").push(formcontrol);
    });
    // console.log(this.createproductform.get('size').value)
    let MultiPartFormData=new FormData();
    MultiPartFormData.append('productname',this.createproductform.get('productname').value);
    MultiPartFormData.append('productquantity',this.createproductform.get('productquantity').value);
    MultiPartFormData.append('productprice',this.createproductform.get('productprice').value);
    MultiPartFormData.append('description',this.createproductform.get('description').value);
    MultiPartFormData.append('color',this.createproductform.get('color').value);
    MultiPartFormData.append('companyname',this.createproductform.get('companyname').value);
    MultiPartFormData.append('productcateogary',this.createproductform.get('productcateogary').value);
    MultiPartFormData.append('size',this.createproductform.get('size').value);
    this.imageArray.forEach((element:any) => {
      MultiPartFormData.append('images',element);
      
    });
    console.log(this.getsizearray)
    console.log(this.createproductform.get('size').value)
//  console.log(this.getsizearray)
    this.ProductService.CreateProduct(MultiPartFormData).subscribe((ResponseFromBackend:any)=>{
      console.log(ResponseFromBackend.Message)
    })


    this.createproductform.reset();
  //   let sizeofproducts= this.createproductform.get('size');
  // sizeofproducts.clear();
  this.fileselect.nativeElement.value=null;

  this.getsizearray=[];
  this.imageArray=[]
  this.checkBoxes?.forEach((element:any) => {
    element.nativeElement.checked = false;
  })
  // console.log(this.getsizearray);
  }
}
