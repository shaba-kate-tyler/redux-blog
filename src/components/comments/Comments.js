import CreateList from '../higher-order/CreateList';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments({ comments }) {
  return CreateList(Comment, comments);
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comments;
