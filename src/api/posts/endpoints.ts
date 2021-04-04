import { AxiosResponse } from 'axios';
import Axios from '../axios';
import { Post, PostResponse } from './types';

export const getPosts = (): Promise<AxiosResponse> => {
  return Axios.instance.get('/posts');
};
export const postPost = (post: Post): Promise<PostResponse> => {
  return Axios.instance.post('/posts', post);
};
export const deletePost = (id: number) => {
  return Axios.instance.delete(`/posts/${id}`);
};
export const editPost = (id: number, info: Partial<Post>) => {
  return Axios.instance.patch(`/posts/${id}`, info);
};

export const paginatePost = (limit: number, page: number) => {
  return Axios.instance.get(`/posts?_limit=${limit}&_page=${page}`);
};
