import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get('http://127.0.0.1:5000/customers')
  }

  submitCustomers(customers) {
    console.log(customers)
    return this.http.post('http://127.0.0.1:5000/customer',customers)
  }
}
