import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {

  constructor(
    private ps: ProductService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    message: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],


  });


contact(){

  var name = this.contactForm.value.name
  var email = this.contactForm.value.email
  var message = this.contactForm.value.message

  if (!this.contactForm.valid) {
    alert("SOMETHING WENT WRONG");
    return;
  }
    this.ps.contact(name, email, message).subscribe((data: any) => {
      console.log("message:", data )
      alert("MESSAGE SEND");
      this.contactForm.reset()

    })
}

}









