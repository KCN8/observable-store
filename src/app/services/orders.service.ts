import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { StoreState } from '../store/store-state';
import { OrderItem } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends ObservableStore<StoreState> {

  constructor() {
    super(
      {
        trackStateHistory: true,
        stateSliceSelector: state => {
          if (state) {
            return {
              orders: state.orders
            };
          }
        }
      }
    );
   }

  getCustomerOrders(customerId: number) {
    const state = this.getState();
    const orders = state.orders.filter(customerOrders => customerOrders.customerId === customerId);
    if (orders.length > 0) {
      return orders[0];
    } else {
      return {
        customerId,
        orderItems: []
      };
    }
  }

  addOrderForCustomer(customerId: number, orderItem: OrderItem) {
    const state = this.getState();
    const orders = state.orders.filter(customerOrders => customerOrders.customerId === customerId);
    if (orders.length > 0) {
      orders[0].orderItems.push(orderItem);
    } else {
      orders.push({
        customerId,
        orderItems: [
          orderItem
        ]
      });
    }
    this.setState(state, OrdersStoreActions.AddOrderForCustomer);
  }
}

export enum OrdersStoreActions {
  GetCustomerOrders = 'GET_CUSTOMER_ORDERS',
  AddOrderForCustomer = 'ADD_ORDER_FOR_CUSTOMER'
}
