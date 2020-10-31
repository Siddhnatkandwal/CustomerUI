import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.component.html',
  styleUrls: ['./listcustomer.component.css']
})
export class ListcustomerComponent implements OnInit {
  allCustomer : any;

  constructor(private service : CustomerserviceService, private router : Router) { }

  ngOnInit(): void {
    this.showAllCustomers();
  }
  showAllCustomers() : void{
    this.service.listcustomers().subscribe((result)=>{
      console.log(result);
      this.allCustomer = result;
    });
  }
  deleteCustomer(id:number){
   alert(id);
    this.service.deleteCustomer(id).subscribe((result)=>{
      this.router.navigate(['showAll']);
    },(err)=>{console.log(err)}
    )
  }
}
