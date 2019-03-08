import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const withDisplayContent = ({ contentName, getContent, fetches, Component }) => {
  class DisplayContent extends PureComponent {
    static propTypes = {
      custProps: PropTypes.object.isRequired,
      fetch: PropTypes.func.isRequired
    }
  
    componentDidMount() {
      this.props.fetch();
    }
  
    render() {
      const { custProps } = this.props;
      return (
        <Component {...custProps} />
      );
    }
  }
  
  const mapStateToProps = state => ({
    custProps: {
      [contentName]: getContent(state)
    }
  });

  const mapDispatchToProps = dispatch => ({
    fetch() {
      fetches.map(fetch => dispatch(fetch()));
    }
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(DisplayContent);
};
