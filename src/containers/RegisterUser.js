import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import RegisterUserForm from '../components/users/RegisterUserForm';
import PropTypes from 'prop-types';

function RegisterUser({ name, username, password, website, email, onSubmit, onChange }) {
  return (
    <RegisterUserForm 
      onSubmit={onSubmit.bind(null, name, username, password, website, email)}
      name={name}
      username={username}
      password={password}
      website={website}
      email={email}
      onChange={onChange}
    />
  );
}

const mapStateToProps = (state, props) => ({
  
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterUser);
