import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AllProductComponent } from './all-product/all-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewOrderComponent } from './view-order/view-order.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    ProductComponent,
    AllProductComponent,
    ViewProductComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    AddCartComponent,
    BuyNowComponent,
    ViewOrderComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductModule { }
