import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';



const option = {

  headers: new HttpHeaders()

}


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  search= new BehaviorSubject("")



  getToken() {

    // access token

    const token = JSON.parse(localStorage.getItem("token") || "")

    // generate header
    let headers = new HttpHeaders()
    //check token access or not
    if (token) {

      //add the token into headers

     option.headers= headers.append('access_token', token)
    }
    return option
    //null 
  }



 private isLogIn = new BehaviorSubject<string>('');

  constructor(private http: HttpClient,) {}
 
  ngOnInit(): void {}

  AllProduct() {
    return this.http.get('http://localhost:3000/all_products');
  }

  ViewProduct(productId:any) {
    return this.http.get(`http://localhost:3000/view_product/${productId}`);
  }

  register(name:any,email: any, mobile: any, password: any) {

    const data = { name,email,mobile,password}
    return this.http.post('http://localhost:3000/register', data) 

  }

  login(email:any,password:any){

    const data = {email,password};
    return this.http.post('http://localhost:3000/login', data) 

  }

  setUsername(username: string): void {
    this.isLogIn.next(username);
  }

  getUsername(): Observable<string> {
    return this.isLogIn.asObservable();
  }




addCart(productId:any,quantity: number){

  const data = {productId,quantity};
  return this.http.post('http://localhost:3000/add_cart',data,this.getToken()) 
}

ViewCart(){

  return this.http.get('http://localhost:3000/view_cart',this.getToken()) 
}


BuyNow(){

return this.http.post('http://localhost:3000/check_out',{},this.getToken()) 
}

logout(){
  return this.http.post("http://localhost:3000/logout",{},this.getToken());
}

Remove(productId:any){
  return this.http.delete(`http://localhost:3000/remove_product/${productId}`,this.getToken());

}

ViewOrder(){
  return this.http.get(`http://localhost:3000/view_order`,this.getToken());


}

contact(name:any,email:any,message:any){

  const data={name,email,message}

  return this.http.post('http://localhost:3000/contact',data)

}

}



