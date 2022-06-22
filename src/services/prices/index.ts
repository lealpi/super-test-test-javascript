import { getApi } from "../../lib/api";
import { ApiRequest } from "../../lib/api/interfaces";
import { Response } from "supertest";
import { PRICE_URL_BY_ITEM_ID } from "../../config";

export const getPricesByOrgId = async (
  orgId: string,
  bearerToken: string
): Promise<Response> => {
  const request: ApiRequest = {
    urlBase: PRICE_URL_BY_ITEM_ID(orgId),
    urlExtra: "/",
    bearerToken,
    customerHeader: {},
  };
  const result = await getApi(request);
  return result;
};
