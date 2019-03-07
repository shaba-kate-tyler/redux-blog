import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../selectors/users';
import { Header } from '../components/Header';
import { Users } from '../components/users/Users';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
  users: getAllUsers(state)
});

class AllUsers extends PureComponent {
  static propTypes = {
    users: PropTypes.array.isRequired
  };

  render() {
    const { users } = this.props;
    return (
        <>
          <Header/>
          <Users users={users}/>
        </>
    );
  }
}

export default connect(mapStateToProps, null)(AllUsers);
