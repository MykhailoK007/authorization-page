import useSWR, { cache } from 'swr';
import { deletePost, editPost, getPosts, paginatePost, Post, postPost } from '../../api/posts';

export const usePosts = () => {
  const { data, mutate } = useSWR('/posts', () => getPosts().then(res => res.data));

  const addPost = async (post: Post) => {
    const res = await postPost(post);
    const cached = cache.get('/posts') as Post[];
    mutate([...cached, { ...post, id: res.data.id }], false);
  };
  const modifyPost = async (id: number, info: Partial<Post>) => {
    await editPost(id, info);
    const cached = cache.get('/posts') as Post[];
    mutate(
      cached.map(el => (el.id === id ? { ...el, ...info } : el)),
      false
    );
  };
  const removePost = async (id: number) => {
    await deletePost(id);
    const cached = cache.get('/posts') as Post[];
    mutate(
      cached.filter(el => el.id !== id),
      false
    );
  };
  const paginatedPost = async (limit: number, page: number) => {
    await paginatePost(limit, page);
    const cached = cache.get('/posts') as Post[];
    mutate(cached.length > limit ? [cached.slice(page * limit, (page + 1) * limit)] : [...cached], false);
  };

  return {
    data,
    addPost,
    modifyPost,
    removePost,
    paginatedPost
  };
};
