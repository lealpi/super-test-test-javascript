import {
  CUSTOMER_TO_TEST,
  ITEM_TO_TEST,
  ORG_ALIAS,
  USER_ORG,
} from "../config";
import { Customer, Price } from "../lib/models/checkout";
import { LoginResponse } from "../lib/models/login";
import { createCheckout } from "../services/checkout";
import { login } from "../services/login";
import { getOrganizationByAlias } from "../services/organization";
import { getProductByid } from "../services/product";

const QUANTITY_INIT = 1;
const STATUS_CODE_CHECKOUT_SUCCESS = 201;
const STATUS_CODE_CHECKOUT_BAD_REQUEST = 400;
const STATUS_CODE_INTERNAL_ERROR_SERVER = 500;
const UPPER_TIME_OUT = 10000;
const MESSAGE_BAD_REQUEST_BY_ORG_ID = "organizationId must be defined";
const MASSAGE_BAD_REQUEST_BY_CART_IS_EMPTY = "Cart is empty";
const MESSAGE_ERROR_WRONG_NUMBER_CARD = "Request failed with status code 502";

describe("POST / Checkout", () => {
  let newPrices: Price[] = [];
  let orgId: string = "";

  beforeAll(async () => {
    const loginResult = await login(USER_ORG, ORG_ALIAS);
    const { authToken } = loginResult.body as LoginResponse;
    const resultOrgByAlias = await getOrganizationByAlias(ORG_ALIAS, authToken);
    const { id } = resultOrgByAlias.body;
    orgId = id;
    const resultProductByItemId = await getProductByid(
      ITEM_TO_TEST.id,
      authToken
    );
    const { prices } = resultProductByItemId.body;
    const priceId = prices[0].id;
    const price: Price = { id: priceId, quantity: QUANTITY_INIT };
    newPrices.push(price);
  });

  it(
    "Should be success",
    async () => {
      const resultCheckout = await createCheckout(
        CUSTOMER_TO_TEST,
        newPrices,
        orgId
      );
      expect(resultCheckout.statusCode).toEqual(STATUS_CODE_CHECKOUT_SUCCESS);
      expect(resultCheckout.body.invoice.organizationId).toEqual(orgId);
    },
    UPPER_TIME_OUT
  );

  it(
    "Should response a bad resquest as it lacks organization id",
    async () => {
      const resultCheckout = await createCheckout(
        CUSTOMER_TO_TEST,
        newPrices,
        ""
      );
      expect(resultCheckout.statusCode).toEqual(
        STATUS_CODE_CHECKOUT_BAD_REQUEST
      );
      expect(resultCheckout.body.message).toEqual(
        MESSAGE_BAD_REQUEST_BY_ORG_ID
      );
    },
    UPPER_TIME_OUT
  );

  it(
    "Should response a bad resquest because the cart is empty",
    async () => {
      const resultCheckout = await createCheckout(CUSTOMER_TO_TEST, [], orgId);
      expect(resultCheckout.body.message).toEqual(
        MASSAGE_BAD_REQUEST_BY_CART_IS_EMPTY
      );
    },
    UPPER_TIME_OUT
  );

  it(
    "Should response a bad resquest wrong card number",
    async () => {
      const WRONG_CARD_NUMBER = "4242424242424243";
      const newCustomer: Customer = {
        ...CUSTOMER_TO_TEST,
        card: { ...CUSTOMER_TO_TEST.card, cardNumber: WRONG_CARD_NUMBER },
      };
      const resultCheckout = await createCheckout(
        newCustomer,
        newPrices,
        orgId
      );
      expect(resultCheckout.statusCode).toEqual(
        STATUS_CODE_INTERNAL_ERROR_SERVER
      );
      expect(resultCheckout.body.message).toEqual(
        MESSAGE_ERROR_WRONG_NUMBER_CARD
      );
    },
    UPPER_TIME_OUT
  );
});
