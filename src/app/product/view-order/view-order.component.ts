import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent {

  orderData:any= [];

  constructor( private ps:ProductService){}

  ngOnInit():void{

    this.ps.ViewOrder().subscribe((item: any) => {
      console.log("order details",item);

     if (item.data.length) {
      item.data.forEach((e : any) =>{
        e.products.forEach((p:any)=>{
          p.orderDate = e?.updatedAt;
          this.orderData.push(p);
        })
      })
     }
     console.log("updated",this.orderData)
  })

 
}

MyOrders(){

  if (this.orderData.length) return true;
  return false;

   }

}
