import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function User({ id, name, username, website, email }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <Link to={`/users/${id}`}>
        <h4>Username: {username}</h4>
      </Link>
      <p>Webiste/Email: {website} / {email}</p>
    </div>
  );
}

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default User;
