export interface Customer {
  id: number;
  name: string;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: number;
}
