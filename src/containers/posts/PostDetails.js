import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Posts from '../../components/posts/Posts';
import Comments from '../../components/comments/Comments';
import { getPostsForUser } from '../../selectors/posts';
import { getCommentsByPost } from '../../selectors/comments';

function PostDetail({ posts, comments }) {
  return (
    <>
      <Posts posts={posts} />
      <Comments comments={comments} />
    </>
  );
}

PostDetail.propTypes = {
  posts: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired
};

const mapStateToProps = (state, props) => ({
  posts: getPostsForUser(state, props.match.params.userId),
  comments: getCommentsByPost(state, props.match.params.postId)
});

export default connect(
  mapStateToProps
)(PostDetail);
