import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from '../Customer';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // private apiUrl = 'http://dummy.restapiexample.com/api/v1';
  private apiUrl = 'http://localhost:5000/customers';
  url: string;

  private updateCustomer = new BehaviorSubject<Customer[]>(null);

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    // const url = `${this.apiUrl}/employees`;
    const url = this.apiUrl;
    return this.http.get<Customer[]>(url);
  }

  deleteCustomer(customer: Customer): Observable<Customer> {
    // const url = `${this.apiUrl}/delete/${customer.id}`;
    console.log("called:"+customer.id)
    const url = `${this.apiUrl}/${customer.id}`;
    return this.http.delete<Customer>(url)
  }

  addCustomer(customer: Customer): Observable<Customer[]> {
    // const url = `${this.apiUrl}/create`; 
    const url = `${this.apiUrl}`;
    return this.http.post<Customer[]>(url, customer, httpOptions)
  }

  // updateCustomer(customer: Customer): Observable<Customer[]> {
  //   const url = `${this.apiUrl}/${customer.id}`;
  //   console.log("Service:" + url)
    
  //   // return this.http.put<Customer>(url, customer, httpOptions);
  // }

}
