import { withDisplayContent } from '../higher-order/DisplayContent';
import { getAllUsers } from '../../selectors/users';
import { fetchUsers } from '../../actions/users';
import Users from '../../components/users/Users';

export default withDisplayContent({
  contentName: 'users',
  getContent: getAllUsers,
  fetches: [fetchUsers],
  Component: Users
});
