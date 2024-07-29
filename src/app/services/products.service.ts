import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  api:string = "https://fakestoreapi.com/products"


  constructor(public http:HttpClient) { }
  
  getAllProducts():Observable<any>{
   return this.http.get<any>(this.api)
  }

 
  
}
