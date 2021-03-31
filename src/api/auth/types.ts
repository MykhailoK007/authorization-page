export interface RegisterUserBody {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
export interface LoginUserBody {
  email: string;
  password: string;
}
export interface LoginUserResponse {
  access_token: string;
  object_Id: number;
  refresh_token: string;
  status: string;
}
