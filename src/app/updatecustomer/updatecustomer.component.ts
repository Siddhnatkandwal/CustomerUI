import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {

  customer : Customer = {name : '', email : '', num : 0 }
  constructor(private service : CustomerserviceService, private router : Router, private path : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.path.snapshot.params['id'];
    this.service.getCustomerById(id).subscribe((data)=>{this.customer=data})
  }

  updateCustomer(){
    this.service.update(this.customer).subscribe((data)=>{
      this.router.navigate(['showAll']);
    },(err)=>{console.log(err)})
  }
}
