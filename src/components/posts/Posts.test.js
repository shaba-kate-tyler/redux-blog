import React from 'react';
import renderer from 'react-test-renderer';
import Posts from './Posts';

describe('Posts', () => {
  it('matches a snapshot of Posts', () => {
    const posts = [
      {
        id: '1',
        userId: '10',
        title: 'a post',
        body: 'This is a post'
      },
      {
        id: '2',
        userId: '11',
        title: 'another post',
        body: 'This is a post'
      },
      {
        id: '3',
        userId: '11',
        title: 'another other post',
        body: 'This is a post'
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
