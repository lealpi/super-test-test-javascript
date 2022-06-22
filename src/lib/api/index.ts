import request, { Response } from "supertest";
import { ApiRequest, ApiRequestPost } from "./interfaces";

export const getApi = async ({
  urlBase,
  urlExtra,
  bearerToken,
  customerHeader,
}: ApiRequest): Promise<Response> => {
  const header = bearerToken
    ? { ...customerHeader, Authorization: `Bearer ${bearerToken}` }
    : { ...customerHeader };
  const result = await request(urlBase).get(urlExtra).set(header);
  return result;
};

export const postApi = async ({
  urlBase,
  urlExtra,
  body,
  bearerToken,
  customerHeader,
}: ApiRequestPost): Promise<Response> => {
  const header = bearerToken
    ? { ...customerHeader, Authorization: `Bearer ${bearerToken}` }
    : { ...customerHeader };
  const result = await request(urlBase).post(urlExtra).send(body).set(header);
  return result;
};
