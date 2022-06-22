import { CHECKOUT_URL } from "../../config";
import { postApi } from "../../lib/api";
import { ApiRequestPost } from "../../lib/api/interfaces";
import { Customer, Price } from "../../lib/models/checkout";

export const createCheckout = (
  customer: Customer,
  prices: Price[],
  organization_id: string
) => {
  const ApiProps: ApiRequestPost = {
    urlBase: CHECKOUT_URL,
    urlExtra: "/",
    body: { customer, prices },
    customerHeader: {
      organization_id,
    },
  };
  const result = postApi(ApiProps);
  return result;
};
