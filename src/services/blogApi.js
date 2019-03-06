export const getCommentsByPostId = postId => {
  return fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(json => json.filter(comment => comment.postId === postId));
};

export const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());
};

export const getPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json());
};
