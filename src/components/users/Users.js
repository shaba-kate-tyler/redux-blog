import CreateList from '../higher-order/CreateList';
import PropTypes from 'prop-types';
import User from './User';

function Users({ users }) {
  return CreateList(User, users);
}

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default Users;
