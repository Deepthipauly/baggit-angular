import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitelayoutComponent } from './sitelayout.component';

const routes: Routes = [{ path: '', component: SitelayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitelayoutRoutingModule { }
