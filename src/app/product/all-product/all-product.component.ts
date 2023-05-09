import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent {
  filterCategory: any
  searchString:any=''

  productData:any

constructor(private ps: ProductService){}

ngOnInit():void{

this.ps.AllProduct().subscribe((products:any)=>{

  console.log(products);
  

this.filterCategory=products.data;
this.productData = products.data;

})

this.ps.search.subscribe((data:any)=>{
  this.searchString=data

});
}

filter(category: any) {
  console.log("category",category);
  

  this.filterCategory = this.productData.filter((i: any) => i.category == category || category == "")

  console.log("filtercategory",this.filterCategory);
  
}
}

