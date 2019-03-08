import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTop5Posts } from '../selectors/posts';
import { fetchPosts } from '../actions/posts';
import Posts from '../components/posts/Posts';

const mapStateToProps = state => ({
  posts: getTop5Posts(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchPosts());
  }
});

class Home extends PureComponent {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { posts } = this.props;
    return (
      <Posts posts={posts}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
