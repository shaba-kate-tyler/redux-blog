import {
  getAllPosts,
  getTop5Posts,
  getPostSearchTerm,
  getFilteredPosts
} from './posts';

describe('post selectors', () => {
  let state = {};

  beforeEach(() => {
    state = {
      posts: {
        postSearchTerm: 'pos',
        isLoading: false,
        posts: [
          { 
            title: 'a post',
            body: 'a pfdsafdasfdasfdafda ost'
          },
          { 
            title: 'another post',
            body: 'b pofdsaf dsafdsafdasst'
          },
          { 
            title: 'other post',
            body: 'c fdsafdsa'
          },
          { 
            title: 'another other post',
            body: 'd poadsflk;jdaslkfjkldsafst'
          },
          { 
            title: 'another other other post',
            body: 'c pos tffdsafd'
          },
          { 
            title: 'another other another',
            body: 'c post'
          }
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
      {
        title: 'another other post',
        body: 'd poadsflk;jdaslkfjkldsafst'
      },
      {
        title: 'a post',
        body: 'a pfdsafdasfdasfdafda ost'
      },
      {
        title: 'another post',
        body: 'b pofdsaf dsafdsafdasst'
      },
      {
        title: 'another other other post',
        body: 'c pos tffdsafd'
      },
      {
        title: 'other post',
        body: 'c fdsafdsa'
      }
    ]);
  });

  it('gets post search term', () => {
    const result = getPostSearchTerm(state);
    expect(result).toEqual('pos');
  });

  it('gets filtered posts by title', () => {
    const result = getFilteredPosts(state);
    expect(result).toEqual([
      { 
        title: 'a post',
        body: 'a pfdsafdasfdasfdafda ost'
      },
      { 
        title: 'another post',
        body: 'b pofdsaf dsafdsafdasst'
      },
      { 
        title: 'other post',
        body: 'c fdsafdsa'
      },
      { 
        title: 'another other post',
        body: 'd poadsflk;jdaslkfjkldsafst'
      },
      { 
        title: 'another other other post',
        body: 'c pos tffdsafd'
      },
    ]);
  });
});
