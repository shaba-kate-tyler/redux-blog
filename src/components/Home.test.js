import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Home', () => {
  it('matches a snapshot', () => {
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
      <Home posts={posts}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
