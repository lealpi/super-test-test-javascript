export interface User {
  email: string;
  password: string;
}

export interface LoginResponse {
  organization: Org;
  user: User;
  authToken: string;
}

interface Org {
  id: string;
}
