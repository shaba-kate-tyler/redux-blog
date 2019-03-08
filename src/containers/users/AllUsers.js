import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getAllUsers } from '../../selectors/users';
import { fetchUsers } from '../../actions/users';
import Users from '../../components/users/Users';

class AllUsers extends PureComponent {
  static propTypes = {
    users: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { users } = this.props;
    return (
        <>
          <Users users={users}/>
        </>
    );
  }
}

const mapStateToProps = state => ({
  users: getAllUsers(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchUsers());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
