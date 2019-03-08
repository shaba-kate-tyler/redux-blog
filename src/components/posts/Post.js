import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ title, body, id }) {
  return (
    <>
      <Link to={`/posts/${id}`}>
        <h2>{title}</h2>
      </Link>
        <p>{body}</p>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Post;
