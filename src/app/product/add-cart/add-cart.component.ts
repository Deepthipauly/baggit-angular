import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css'],
})
export class AddCartComponent {
  cartData: any = [];
  // quantity:number=1
  constructor(
    private ps: ProductService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.ps.ViewCart().subscribe((item: any) => {
      console.log(item);

      this.cartData = item.data?.products || [];
    });
  }
  getCartData() {
    if (this.cartData.length) return true;
    return false;
  }

  buynow() {
    this.ps.BuyNow().subscribe((item: any) => {});
    this.router.navigateByUrl('');
  }

  removeProduct(productId: any) {
    this.ps.Remove(productId).subscribe((item: any) => {
      this.ps.ViewCart().subscribe((item: any) => {
        console.log("after delete",item);
        this.cartData = item.data?.products || [];
      });
    });
  }
}


//  reloadPage(){
//    window.location.reload()
//  }



