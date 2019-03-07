import React from 'react';
import PropTypes from 'prop-types';

function User({ name, username, website, email }) {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{username}</h4>
      <p>{website} / {email}</p>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default User;
