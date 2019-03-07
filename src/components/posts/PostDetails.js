import React from 'react';
import PropTypes from 'prop-types';
import Comments from '../comments/Comments';

function PostDetail({ postTitle, postBody, comments }) {
  return (
    <>
      <h2>{postTitle}</h2>
      <p>{postBody}</p>
      <Comments comments={comments} />
    </>
  );
}

PostDetail.propTypes = {
  postTitle: PropTypes.string.isRequired,
  postBody: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired
};

export default PostDetail;
