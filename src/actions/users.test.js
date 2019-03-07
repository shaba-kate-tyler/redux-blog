import { fetchComments } from './comments';

jest.mock('../services/blogApi.js');

describe('user actions', () => {
  it('gets a list of comments', () => {
    const result = fetchComments();

    expect(result).toEqual({
      type: 'FETCH_COMMENTS',
      payload: expect.any(Promise),
      loadStart: 'LOAD_COMMENTS_START',
      loadEnd: 'LOAD_COMMENTS_END'
    });
  });
});

