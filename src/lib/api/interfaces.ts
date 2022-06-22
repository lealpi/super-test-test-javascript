export interface ApiRequest {
  urlBase: string;
  urlExtra: string;
  bearerToken?: string;
  customerHeader: any;
}

export interface ApiRequestPost extends ApiRequest {
  body: any;
}
