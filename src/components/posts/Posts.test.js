import React from 'react';
import renderer from 'react-test-renderer';
import Posts from './Posts';

describe('Posts', () => {
  it('matches a snapshot of Posts', () => {
    const posts = [
      {
        id: '1',
        title: 'a post',
      },
      {
        id: '2',
        title: 'another post',
      },
      {
        id: '3',
        title: 'another other post',
      }
    ];
    const tree = renderer.create(
      <Posts
        posts={posts}
      />
    );

    expect(tree).toMatchSnapshot();
  });
});
