import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product/service/product.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username:any;
  token: any;
  cartData:any = [];
  searchTerm:any



  constructor(private ps: ProductService,private router:Router){
 
  }

  ngOnInit(): void{
    this.username = localStorage.getItem("name");
    if(!this.username){
      this.ps.getUsername().subscribe(username => this.username = username);
    }
    }
   

  isLoggedIn(){
    if(this.username) return true;
    if(localStorage.getItem("name")){
      this.username = localStorage.getItem("name");
      return true;
    }
    return false;
  }

  cartPage(){
   this.router.navigateByUrl("product/add_cart")

  }

  logout(){
    this.ps.logout().subscribe(data=> {console.log(data)});
   
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    this.username = undefined;
    this.router.navigateByUrl("");
  }

  MyOrders(){
    this.router.navigateByUrl("product/view-order")


  }

  searchData(event:any){
    console.log(event);
    this.searchTerm=event.target.value;
    //search data to behaviour subject
    this.ps.search.next(this.searchTerm)

  }


}
