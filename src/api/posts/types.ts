import { AxiosResponse } from 'axios';

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export type PostResponse = AxiosResponse<{ message: string; id: number; statusCode: number }>;
