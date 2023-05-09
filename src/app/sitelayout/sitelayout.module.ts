import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitelayoutRoutingModule } from './sitelayout-routing.module';
import { SitelayoutComponent } from './sitelayout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SitelayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SitelayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
exports:[
  HeaderComponent,
  FooterComponent
]

})
export class SitelayoutModule { }
