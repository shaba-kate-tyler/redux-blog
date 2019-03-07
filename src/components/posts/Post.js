import React from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter as Router } from 'react-router-dom';

function Post({ title, body, userId, postId }) {
  return (
    <>
      <Router>
        <h2>
          <Link to={`/posts/${userId}/${postId}`}>{title}</Link>
        </h2>
      </Router>
      <p>{body}</p>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired
};

export default Post;
