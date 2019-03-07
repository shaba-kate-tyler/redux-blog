import React from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter as Router } from 'react-router-dom';

function Post({ title, id }) {
  return (
    <Router>
      <>
       <Link to={`/posts/${id}`}>{title}</Link>
      </>
    </Router>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Post;
