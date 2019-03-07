import { getAllPosts } from './posts';

describe('post selectors', () => {
  let state = {};

  beforeEach(() => {
    state = {
      posts: {
        posts: [
          { a: 'a post' },
          { b: 'b post' },
          { c: 'c post' }
        ]
      }
    };
  });

  it('gets all posts', () => {
    const result = getAllPosts(state);
    expect(result).toEqual([
      { a: 'a post' },
      { b: 'b post' },
      { c: 'c post' }
    ]);
  });
});
