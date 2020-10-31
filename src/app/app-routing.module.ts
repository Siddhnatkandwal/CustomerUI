import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';

const routes: Routes = [
  {path:'showAll', component:ListcustomerComponent},
  {path:'createCustomer', component:CreatecustomerComponent},
  {path:'update/:id', component:UpdatecustomerComponent}
  // {path:'listcustomer', component:ListcustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
