import React from 'react';
import User from './User';
import renderer from 'react-test-renderer';

describe('User', () => {
  it('matches a snapshot', () => {
    const props = {
      name: 'kaiya',
      username: 'ladybeard',
      website: 'schnepherds4life.org',
      email: 'itsme@kai.com'
    };

    const tree = renderer.create(
      <User { ...props } />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
