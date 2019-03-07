import { getAllComments } from './comments';

describe('comments selector tests', () => {
  let state = {};

  beforeEach(() => {
    state = {
      comments: {
        comments: [
          { comment: 'this is some text' },
          { comment: 'this is some text' },
          { comment: 'this is some text' }
        ]
      }
    };
  });
  it('returns the comments from state', () => {
    const results = getAllComments(state);

    expect(results).toEqual([
      { comment: 'this is some text' },
      { comment: 'this is some text' },
      { comment: 'this is some text' }
    ]);
  });
});
