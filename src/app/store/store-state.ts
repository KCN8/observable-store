import { Customer } from '../interfaces/customer';
import { Order } from '../interfaces/order';

export interface StoreState {
  customers: Customer[];
  selectedCustomer: Customer;
  orders: Order[];
}
