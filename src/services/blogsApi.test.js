import { getCommentsByPostId, getUsers, getPosts } from './blogApi';

jest.mock('./blogApi.js');

describe('blogApi Tests', () => {
  it('Returns a list of comments by postId', () => {
    getCommentsByPostId()
      .then(res => expect(res).toHaveLength(3));
  });
  it('Returns a list of users', () => {
    getUsers()
      .then(res => expect(res).toHaveLength(3));
  });
  it('Returns a list of posts', () => {
    getPosts()
      .then(res => expect(res).toHaveLength(3));
  });
});
