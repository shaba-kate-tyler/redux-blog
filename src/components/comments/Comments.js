import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments({ comments }) {
  const commentsList = comments.map(comment => <li key={comment.id}>{<Comment {...comment}/>}</li>);
  return (
    <>
      <ul>
        {commentsList}
      </ul>
    </>
  );
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comments;
