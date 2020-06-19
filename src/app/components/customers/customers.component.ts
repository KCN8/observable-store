import { Component, OnInit, Input } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/interfaces/customer';
import { OrdersService } from 'src/app/services/orders.service';
import { StoreState } from 'src/app/store/store-state';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];
  selectedCustomer: number;
  @Input() appState: StoreState;

  constructor(
    private _customersService: CustomersService,
  ) { }

  ngOnInit() {
    this.customers = this._customersService.getCustomers();
  }

  addNewCustomer() {
    const customer = {
      id: 3,
          name: 'Zorg',
          address: {
            street: 'Pug Street',
            city: 'Littleton',
            state: 'Colorado',
            zip: 80199
          }
    };

    this._customersService.addCustomer(customer);
  }

  setSelectedCustomer(customerId) {
    this._customersService.getSelectedCustomer(customerId);
  }

  trackByFn(index, item) {
    return item.id;
  }

}
