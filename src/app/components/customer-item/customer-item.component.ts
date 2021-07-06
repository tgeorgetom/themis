import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/Customer';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss']
})
export class CustomerItemComponent implements OnInit {
  @Input() customer: Customer;
  @Output() onDeleteCustomer: EventEmitter<Customer> = new EventEmitter();
  @Output() onUpdateCustomer: EventEmitter<Customer> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(customer) {
    console.log(customer)
    this.onDeleteCustomer.emit(customer);
  }

  onUpdate(customer) {
    this.onUpdateCustomer.emit(customer);
  }

}
