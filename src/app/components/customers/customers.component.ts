import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/Customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerSevice: CustomerService) { }

  ngOnInit(): void {
    this.customerSevice.getCustomers().subscribe((customers) => (this.customers = customers)); 
  }

  deleteCustomer(customer: Customer){
    this.customerSevice
    .deleteCustomer(customer)
    .subscribe(
      () => (this.customers = this.customers.filter((c) => c.id !== customer.id))
    )
  }

  // updateCustomer(customer: Customer){
  //   this.customerSevice
  //   .updateCustomer(customer)
  //   .subscribe()
  // }



  addCustomer(customer: Customer) {
    this.customerSevice.addCustomer(customer).subscribe((customer) => this.customers.push(customer))
  }

}
