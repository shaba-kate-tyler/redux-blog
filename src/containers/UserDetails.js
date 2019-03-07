import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../selectors/users';
import { getAllPosts } from '../selectors/posts';
import User from '../components/users/User';
import Posts from '../components/posts/Posts';
import PropTypes from 'prop-types';


class UserDetails extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired
  };

  render() {
    return (
      <>
      <User { ...this.props }/>
      <Posts { ...this.props }/>
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: getCurrentUser(state, props.match.params.id),
  posts: getAllPosts(state)
});

export default connect(
  mapStateToProps
)(UserDetails);
