import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private ps:ProductService, private router:Router,private fb: FormBuilder){}









  loginForm = this.fb.group({

    email: ['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]


  })
 

    login() {

      var email = this.loginForm.value.email;
      var password = this.loginForm.value.password
  
      //const result = this.ds.login(acnum, psw)
  
      if (this.loginForm.valid) {
  
        this.ps.login(email, password).subscribe((data: any) => {
          localStorage.setItem("userId", data.data.userId);
          localStorage.setItem("email", data.data.email);
          localStorage.setItem("token", JSON.stringify(data.data.token));
          localStorage.setItem("name",data.data.name);
          this.ps.setUsername(data.data.name);
          alert(data.message)
          this.router.navigateByUrl("")

        },
  
          data => {
            console.log("data",data);
            alert(data.error?.error)
  
          }
        )


        
      }
      else {
        alert('incorrect email or password')
      }

     
    

  }


}
