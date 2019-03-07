import {
  getAllPosts,
  getTop5Posts,
  getPostSearchTerm
} from './posts';

describe('post selectors', () => {
  let state = {};

  beforeEach(() => {
    state = {
      posts: {
        postSearchTerm: 'pos',
        isLoading: false,
        posts: [
          { body: 'a pfdsafdasfdasfdafda ost' },
          { body: 'b pofdsaf dsafdsafdasst' },
          { body: 'c fdsafdsa' },
          { body: 'd poadsflk;jdaslkfjkldsafst' },
          { body: 'c pos tffdsafd' },
          { body: 'c post' }
        ]
      }
    };
  });

  it('gets all posts', () => {
    const result = getAllPosts(state);
    expect(result).toEqual(state.posts.posts);
  });

  it('gets top 5 posts by length', () => {
    const result = getTop5Posts(state);
    expect(result).toHaveLength(5);
    expect(result).toEqual([
      { body: 'd poadsflk;jdaslkfjkldsafst' },
      { body: 'a pfdsafdasfdasfdafda ost' },
      { body: 'b pofdsaf dsafdsafdasst' },
      { body: 'c pos tffdsafd' },
      { body: 'c fdsafdsa' }
    ]);
  });

  it('gets post search term', () => {
    const result = getPostSearchTerm(state);
    expect(result).toEqual('pos');
  });
});
