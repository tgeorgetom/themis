import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/Customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  @Output() onAddCustomer: EventEmitter<Customer> = new EventEmitter();
  name: string;
  salary: string;
  age:string;
  showAddCustomer: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  toggleAddCustomer() {
    this.showAddCustomer = !this.showAddCustomer;
    console.log(this.showAddCustomer)
  }

  onSubmit(){

    if(!this.name) {
      alert("Please add Customer name")  
      return;
    }
    
    const newCustomer = {
      employee_name: this.name,
      employee_salary: parseInt(this.salary),
      employee_age: parseInt(this.age),
      profile_image: "",
    };

    console.log(newCustomer)

    this.onAddCustomer.emit(newCustomer)
    // form.reset();
  }

}
