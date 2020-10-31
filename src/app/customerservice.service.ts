import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

const myheader={
  headers:new HttpHeaders({'Content-type' : 'application/json',
  'Access-Control-Allow-Origin' : '*'
})
}

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http : HttpClient) { }
  listcustomers():Observable<Customer[]>{
    alert('List Customers')
    return this.http.get<Customer[]>("http://localhost:8585/customers");
  }

  deleteCustomer(id : number) : Observable<Customer>{
    return this.http.delete<Customer>("http://localhost:8585/delete/"+id,myheader);
  }

  register(stu : Customer) : Observable<Customer>{
    return this.http.post<Customer>("http://localhost:8585/addCustomer",stu,myheader);
  }

  update(stu : Customer) : Observable<Customer>{
    return this.http.put<Customer>("http://localhost:8585/update",stu,myheader);
  }

  getCustomerById(id:number) : Observable<Customer>{
    return this.http.get<Customer>("http://localhost:8585/customerById/"+id);
  }
}
