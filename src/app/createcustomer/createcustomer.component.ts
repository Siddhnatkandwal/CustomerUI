import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {

  customer : Customer = {name : '', email : '', num : 0 }

  constructor(private service : CustomerserviceService, private router : Router) { }

  ngOnInit(): void {
  }
  saveCustomer(){
    this.service.register(this.customer).subscribe((result)=>{
      this.router.navigate(["showAll"]);
    },(err)=>{console.log(err)}
    );
  }

}
