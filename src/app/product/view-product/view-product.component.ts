import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent {
  viewData: any;
  productId: any;
  cartData: any;
  token:any
  quantity:any;

  constructor(private ps: ProductService, private ar: ActivatedRoute,private router:Router) {
    this.quantity = 1;
  }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.productId = data['id'];
    });

    this.ps.ViewProduct(this.productId).subscribe((item: any) => {
      console.log(item);

      this.viewData = item.data;
    });
    
  }

  addToCart(productId: any,quantity: number = 1) {
   if (!this.isLoggedIn()){

    alert("Login to buy Product")
    this.router.navigateByUrl("/product/login")
   }

    this.ps.addCart(productId,quantity).subscribe((item: any) => {
      console.log(item);
     this.cartData = item?.data;

if(item.data){
  alert("Item added to cart")
}

    });
  

  }

  isLoggedIn(){
    if(localStorage.getItem("token")){
      this.token = localStorage.getItem("token");
      return true;
    }
    return false;
  }

  plus(){
    if(this.quantity !== 10){
      this.quantity++;
    }
  }

  minus(){

    if(this.quantity !== 1){
      this.quantity--;
    }
  }



}
