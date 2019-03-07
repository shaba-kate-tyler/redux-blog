import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <>
      <p>{comment.body}</p>
      <h4>-{comment.email}</h4>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default Comment;
