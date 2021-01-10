import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private http: HttpClient
    ) { }


  items = [];

  addToCart(product) {

    // for(let i in this.items){
    //   if(this.items[i].id==product.id){

    //   }
      // else{
        this.items.push(product);
      // }
    // }
    


  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }


  getAllData():Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }

  removeFromCart(index) {
   
     this.items.splice(index, 1);
    // this.items.splice(this.items.indexOf(product.id), 1);

     // this.addedBook.splice(this.addedBook.indexOf(this.product), 1);
  }


}
