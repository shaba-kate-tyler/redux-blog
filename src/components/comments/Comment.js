import React from 'react';
import PropTypes from 'prop-types';

function Comment({ body, email }) {
  return (
    <>
      <p>{body}</p>
      <h4>-{email}</h4>
    </>
  );
}

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Comment;
