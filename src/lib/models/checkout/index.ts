export interface CheckoutBody {
  orderId: string;
  fi;
}

export interface UserOrg {
  email: string;
  password: string;
}

export interface Customer {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: Phone;
  card: Card;
  personalId: PersonalId;
  taxId: PersonalId;
}

export interface Phone {
  countryCode: string;
  areaCode: string;
  phoneNumber: string;
}

export interface PersonalId {
  type: string;
  value: string;
}

export interface Card {
  id: string;
  cardNumber: string;
  securityCode: string;
  deviceId: string;
  expiration: Expiration;
  cardHolder: CardHolder;
}

export interface CardHolder {
  identification: PersonalId;
  name: string;
}

export interface Expiration {
  month: number;
  year: string;
}

export interface Item {
  id: string;
  name: string;
  description: string;
}

export interface Price {
  id: string;
  quantity: number;
}
