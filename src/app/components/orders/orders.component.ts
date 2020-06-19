import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { Order } from 'src/app/interfaces/order';
import { Customer } from 'src/app/interfaces/customer';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnChanges {

  @Input() selectedCustomer: Customer;
  customerOrders: Order;

  constructor(
    private _ordersService: OrdersService
    ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.customerOrders = this._ordersService.getCustomerOrders(this.selectedCustomer.id);
  }

  addOrderForCustomer(customerId: number) {
    const orderItem = {
      id: 3,
      name: 'New Dog',
      cost: 1000000
    };

    this._ordersService.addOrderForCustomer(customerId, orderItem);
  }

}
