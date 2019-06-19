import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomersService } from '../services/customers.service'
import { CustomerModel } from '../models/CustomersModel'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('instrumentChild', {static: false}) instrumentChild;

  customers: CustomerModel[];

  newCustomer: {};

  constructor(private customersService: CustomersService) { 
    

  }

  ngOnInit() {
    this.customersService.getCustomers().subscribe((data) => {
      this.customers = data as CustomersService[];
      this.customers = this.customers.slice(1,6);
    });
  }



  submitCustomer() {
    this.customersService.submitCustomers(this.newCustomer)
  }
}
