import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import styles from '../styles/Posts.css';

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
    <ul className={styles.Posts}>
      {postsList}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
