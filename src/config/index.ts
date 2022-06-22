import { Customer, Item, UserOrg } from "../lib/models/checkout";

//URLs
export const MAIN_URL = "https://api.rebill.dev/v2";
export const CHECKOUT_URL = `${MAIN_URL}/checkout`;
export const LOGIN_URL = (orgAlias: string) =>
  `${MAIN_URL}/auth/login/${orgAlias}`;
export const ORG_URL_ALIAS = (orgAlias: string) =>
  `${MAIN_URL}/organization/alias/${orgAlias}`;

export const PRICE_URL_BY_ITEM_ID = (itemId: string) =>
  `${MAIN_URL}/item/price/${itemId}`;

export const PRICE_URL_ITEM_BY_ID = (itemId: string) =>
  `${MAIN_URL}/item/${itemId}`;

//DATA
export const ORG_ALIAS = "leonelpirelchallenge";

export const USER_ORG: UserOrg = {
  email: "leonelpirelchallenge@rebill.to",
  password: "Password123!",
};

export const CUSTOMER_TO_TEST: Customer = {
  phone: {
    countryCode: "54",
    areaCode: "15",
    phoneNumber: "87654321",
  },
  personalId: {
    type: "DNI",
    value: "987654322",
  },
  taxId: {
    type: "CUIL",
    value: "23-123456789-9",
  },
  card: {
    id: "asdasdsadasd",
    cardHolder: {
      identification: {
        type: "DNI",
        value: "987654322",
      },
      name: "john doe",
    },
    expiration: {
      month: 11,
      year: "2025",
    },
    cardNumber: "4000056655665556",
    securityCode: "123",
    deviceId: "deviceId_karl",
  },
  firstName: "Leonel",
  lastName: "marx",
  email: "leonalmarxlenin@gmail.com",
};

export const ITEM_TO_TEST: Item = {
  id: "4f8fa61e-fd17-40f3-91d3-766046c4c4d0",
  name: "Iphone 14",
  description: "The most fast phone in the world",
};
