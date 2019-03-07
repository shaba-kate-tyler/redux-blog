import reducer from './posts';

describe('reducer', () => {
  let state = {};
  
  beforeEach(() => {
    state = {
      posts: []
    };
  });

  it('updates posts state with an array of all posts', () => {
    const action = {
      type: 'FETCH_POSTS',
      postSearchTerm: 'a',
      isLoading: false,
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

  it('updates post search term', () => {
    const action = {
      type: 'UPDATE_POST_SEARCH_TERM',
      payload: 'pos'
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      postSearchTerm: 'pos'
    });
  });

});
