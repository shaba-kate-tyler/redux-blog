import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ title, body, userId, postId }) {
  return (
    <>
      <Link to={`/posts/${userId}/${postId}`}>
        <h2>{title}</h2>
      </Link>
        <p>{body}</p>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired
};

export default Post;
