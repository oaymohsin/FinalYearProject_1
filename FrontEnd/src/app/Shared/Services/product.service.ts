import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private HttpClient:HttpClient) { }

  CreateProduct(Payload:any){
    return this.HttpClient.post('http://localhost:8866/ProductManagement/ProductData',Payload);
  }
  GetAllProducts(){
    return this.HttpClient.get('http://localhost:8866/ProductManagement/GetAllProducts')
  }
  GetProductById(_id:any){
    return this.HttpClient.get(`http://localhost:8866/ProductManagement/GetProductById/${_id}`)
  }
}
