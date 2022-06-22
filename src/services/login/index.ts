import { LOGIN_URL } from "../../config";
import { postApi } from "../../lib/api";
import { ApiRequestPost } from "../../lib/api/interfaces";
import { User } from "../../lib/models/login/index";

export const login = (user: User, orgAlias: string) => {
  const ApiProps: ApiRequestPost = {
    urlBase: LOGIN_URL(orgAlias),
    urlExtra: "/",
    body: { ...user },
    customerHeader: {},
  };
  const result = postApi(ApiProps);
  return result;
};
