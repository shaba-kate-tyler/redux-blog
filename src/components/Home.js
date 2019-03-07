import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ posts }) {
  const postList = posts.map(post => <li key={post.id}>{post.title}</li>);
  return <ul>{postList}</ul>;
}

Home.propTypes = {
  posts: PropTypes.array.isRequired
};
