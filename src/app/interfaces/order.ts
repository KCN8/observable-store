export interface Order {
  customerId: number;
  orderItems: OrderItem[];
}

export interface OrderItem {
  id: number;
  name: string;
  cost: number;
}
