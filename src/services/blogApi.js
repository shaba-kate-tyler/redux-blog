export const getCommentsByPostId = postId => {
  return fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(json => json.filter(comment => comment.postId === postId));
};
