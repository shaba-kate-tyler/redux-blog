import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import styles from '../styles/Comments.css';

function Comments({ comments }) {
  const commentsList = comments.map(comment => <li key={comment.id}>{<Comment {...comment}/>}</li>);
  return (
    <ul className={styles.Comments}>
      {commentsList}
    </ul>
  );
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comments;
