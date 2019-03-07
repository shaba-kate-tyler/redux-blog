import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../selectors/users';
import PropTypes from 'prop-types';

class UserDetails extends PureComponent {
  static propTypes = {
    currentUser: PropTypes.number.isRequired
  };

  render() {
    return (
      <h1>hi</h1>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state,)
});

export default connect(
  mapStateToProps,

)(UserDetails);
