import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Home', () => {
  it('matches a snapshot', () => {
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
      <Home posts={posts}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
