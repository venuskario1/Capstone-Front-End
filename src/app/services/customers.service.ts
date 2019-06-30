import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get('https://music-store-back-end.herokuapp.com/customers')
  }

  submitCustomers(customers) {
    console.log(customers)
    return this.http.post('https://music-store-back-end.herokuapp.com/customer',customers)
  }
}

