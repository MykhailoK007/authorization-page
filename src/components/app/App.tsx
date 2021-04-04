import React from 'react';
import { usePosts } from '../../hooks/posts/usePosts';

export const App = () => {
  const createPost = () => {
    addPost({
      id: 100,
      userId: 1,
      body: 'body',
      title: 'title'
    });
  };
  const editPost = () => {
    modifyPost(1, { title: 'new title' });
  };
  const deletePost = () => {
    removePost(1);
  };
  const postWithPagination = () => {
    paginatedPost(5, 10);
  };
  const { data, addPost, modifyPost, removePost, paginatedPost } = usePosts();
  console.log(data);

  return (
    <div>
      <div>
        <button onClick={createPost}>add post </button>
      </div>
      <div>
        <button onClick={editPost}>edit post </button>
      </div>
      <div>
        <button onClick={deletePost}>remove post </button>
      </div>
      <div>
        <button onClick={postWithPagination}>get paginated list </button>
      </div>
    </div>
  );
};
