import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

function Users({ users }) {
  const userList = users.map(user => {
    return <li key={user.id}>{<User { ...user }/>}</li>;
  });
  return (
    <ul>
      {userList}
    </ul>
  );
}

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default Users;
