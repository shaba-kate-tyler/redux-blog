import CreateList from '../higher-order/CreateList';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts }) {
  return CreateList(Post, posts);
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
