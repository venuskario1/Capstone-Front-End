import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { CustomerModel } from '../models/customerModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('instrumentChild', {static: false}) instrumentChild;

  customers: any;

  newCustomer: {};

  constructor(private customersService: CustomersService) { 
    

  }

  ngOnInit() {
    this.customersService.getCustomers().subscribe((data) => {
      console.log(data)
      this.customers = data
      console.log("This is the customers: ", this.customers)
      // this.customers = this.customers.slice(1,6);
    });
  }



  submitCustomer(name,email) {
    let result = {name:name,email:email}
    this.customersService.submitCustomers(result).subscribe(customerData => console.log(customerData))
  }
}
