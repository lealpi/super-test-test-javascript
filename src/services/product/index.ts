import { Response } from "supertest";
import { PRICE_URL_ITEM_BY_ID } from "../../config";
import { getApi } from "../../lib/api";
import { ApiRequest } from "../../lib/api/interfaces";

export const getProductByid = async (
  itemId: string,
  bearerToken: string
): Promise<Response> => {
  const request: ApiRequest = {
    urlBase: PRICE_URL_ITEM_BY_ID(itemId),
    urlExtra: "/",
    bearerToken,
    customerHeader: {},
  };
  const result = await getApi(request);
  return result;
};
