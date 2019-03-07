import React from 'react';
import Users from './Users';
import renderer from 'react-test-renderer';
// import User from './User';

describe('Users', () => {
  it('matches a snapshot', () => {
    const props = {
      users: [
        {
          id: 1,
          name: 'kaiya',
          username: 'ladybeard',
          website: 'schnepherds4life.org',
          email: 'itsme@kai.com'
        },
        {
          id: 2,
          name: 'kingsley',
          username: 'fathersLittleTiger',
          website: 'carolKibble.org',
          email: 'yasssss@kitty.com'
        },
        {
          id: 3,
          name: 'tyler',
          username: 'tylerCorbett',
          website: 'tylerTheDev.org',
          email: 'sayhi@tyler.com'
        }
      ]
    };

    const tree = renderer.create(
      <Users { ...props } />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
