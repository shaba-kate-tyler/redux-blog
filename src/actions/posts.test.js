import { fetchPosts } from './posts';

jest.mock('../services/blogApi.js');

describe('post actions', () => {
  it('gets all posts', () => {
    const result = fetchPosts();

    expect(result).toEqual({
      type: 'FETCH_POSTS',
      payload: expect.any(Promise)
    });
  });
});
