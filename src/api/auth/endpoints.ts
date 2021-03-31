import { AxiosResponse } from 'axios';
import Axios from '../axios';
import { LoginUserBody, LoginUserResponse, RegisterUserBody } from './types';

export const registerUser = (body: RegisterUserBody): Promise<any> => {
  return Axios.instance.post('/register', body);
};
export const loginUser = (body: LoginUserBody): Promise<AxiosResponse<LoginUserResponse>> => {
  return Axios.instance.post('/login', body);
};
