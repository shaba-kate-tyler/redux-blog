import React from 'react';
import renderer from 'react-test-renderer';
import Post from './Post';

describe('Post', () => {
  it('matches a post snapshot', () => {
    const tree = renderer.create(
      <Post
        title={'A Post'}
        body={'This is a post on a rant'}
        userId={'1'}
        postId={'2'}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
