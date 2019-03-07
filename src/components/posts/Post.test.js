import React from 'react';
import renderer from 'react-test-renderer';
import Post from './Post';

describe('Post', () => {
  it('matches a post snapshot', () => {
    const tree = renderer.create(
      <Post
        title={'A Post'}
        id={'1'}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
