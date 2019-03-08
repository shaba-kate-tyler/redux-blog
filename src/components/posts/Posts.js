import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function Posts({ posts }) {
  const postsList = posts.map(post => 
    <li key={post.id}>
      <Post
        title={post.title}
        body={post.body}
        id={post.id}
      />
    </li>
  );

  return (
    <ul>
      {postsList}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
