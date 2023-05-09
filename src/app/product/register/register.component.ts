import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private ps: ProductService,private router:Router,private fb: FormBuilder){}



   registerForm= this.fb.group(

    {
      name:  ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],

      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mobile: ['', [Validators.required, Validators.pattern("^[0-9]*$"),
                    Validators.minLength(10), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]

  
  
    }
  )

   register(){

    var name = this.registerForm.value.name
    var email = this.registerForm.value.email
    var mobile  = this.registerForm.value.mobile
    var password = this.registerForm.value.password

    if (this.registerForm.valid) {
      this.ps.register(name, email, mobile, password).subscribe((data: any) => {
        alert(data.message);
        this.router.navigateByUrl("product/login")

      },
        result => {

          alert(result.error.error) 
        })}
    else {
      alert("incorrect email or password")
    }}


  }

