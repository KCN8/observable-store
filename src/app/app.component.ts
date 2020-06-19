import { Component, OnInit } from '@angular/core';
import { CustomersService } from './services/customers.service';
import { Observable } from 'rxjs';
import { StoreState } from './store/store-state';
import { OrdersService } from './services/orders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observable-store';
  state: Observable<StoreState>;
  ordersState: Observable<StoreState>;

  constructor(
    private _customersService: CustomersService,
    private _ordersService: OrdersService
  ) { }

  ngOnInit() {
    this.state = this._customersService.stateChanged;

    this._ordersService.stateChanged
      .subscribe(
        orders => console.log(orders)
      );
  }
}
