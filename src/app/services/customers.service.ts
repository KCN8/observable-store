import { ObservableStore } from '@codewithdan/observable-store';
import { StoreState } from '../store/store-state';
import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService extends ObservableStore<StoreState> {

  constructor() {
    super(
      {
        logStateChanges: true,
        // trackStateHistory: true,
      }
    );

    const initialState: StoreState = {
      customers: [
        {
          id: 1,
          name: 'Korben Dallas',
          address: {
            street: 'Multipass Street',
            city: 'Denver',
            state: 'Colorado',
            zip: 80111
          }
        },
        {
          id: 2,
          name: 'Leeloo Dallas',
          address: {
            street: '5th Street',
            city: 'Littleton',
            state: 'Colorado',
            zip: 80199
          }
        }
      ],
      selectedCustomer: null,
      orders: [
        {
          customerId: 1,
          orderItems: [
            {
              id: 1,
              name: 'Toilet Paper',
              cost: 500
            },
            {
              id: 2,
              name: 'Face Masks',
              cost: 20
            }
          ]
        },
        {
          customerId: 2,
          orderItems: [
            {
              id: 1,
              name: 'Toilet Paper',
              cost: 500
            },
            {
              id: 3,
              name: 'Booze',
              cost: 60
            }
          ]
        }
      ]
    };

    this.setState(initialState, CustomersStoreActions.InitializeStore);
   }

  //  private fetchCustomers() {
  //   return this.http.get<Customer[]>(this.customersUrl)
  //     .pipe(
  //         map(customers => {
  //             this.setState({ customers }, CustomersStoreActions.GetCustomers);
  //             return customers;
  //         }),
  //         catchError(this.handleError)
  //     );
  // }

  getCustomers() {
    const state = this.getState();

    if (state) {
      return state.customers;
    } else {
      // return this.fetchCustomers();
    }
  }

  getSelectedCustomer(id: number) {
    const state = this.getState();
    state.selectedCustomer = state.customers.find(customer => customer.id === id);
    this.setState(state, CustomersStoreActions.GetSelectedCustomer);
  }

  addCustomer(customer: Customer) {
    const state = this.getState();
    state.customers.push(customer);
    this.setState(state, CustomersStoreActions.AddCustomer);
  }
}

export enum CustomersStoreActions {
  InitializeStore = 'INITIALIZE_STORE',
  GetCustomers = 'GET_CUSTOMERS',
  GetSelectedCustomer = 'GET_SELECTED_CUSTOMER',
  AddCustomer = 'ADD_CUSTOMER'
}
