import reducer from './posts';

describe('reducer', () => {
  let state = {};
  
  beforeEach(() => {
    state = {
      posts: []
    };
  });

  it('it updates posts state with an array of all posts', () => {
    const action = {
      type: 'FETCH_POSTS',
      payload: [
        { a: 'a post' }
      ]
    };

    const results = reducer(state, action);
    expect(results).toEqual({
      ...state,
      posts: [{ a: 'a post' }]
    });
  });
});
