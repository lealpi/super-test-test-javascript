import { ORG_URL_ALIAS } from "../../config";
import { getApi } from "../../lib/api";
import { ApiRequest } from "../../lib/api/interfaces";
import { Response } from "supertest";

export const getOrganizationByAlias = async (
  alias: string,
  bearerToken: string
): Promise<Response> => {
  const request: ApiRequest = {
    urlBase: ORG_URL_ALIAS(alias),
    urlExtra: "/",
    bearerToken,
    customerHeader: {},
  };
  const result = await getApi(request);
  return result;
};
