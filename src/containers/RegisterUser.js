import React from 'react';
import { connect } from 'react-redux';
import RegisterUserForm from '../components/users/RegisterUserForm';
import PropTypes from 'prop-types';
import { getRegisterName, getRegisterUsername, getRegisterPassword, getRegisterWebsite, getRegisterEmail } from '../selectors/users';
import { registerUser, updateRegName, updateRegUsername, updateRegPassword, updateRegWebsite, updateRegEmail } from '../actions/users';

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

const mapStateToProps = state => ({
  name: getRegisterName(state),
  username: getRegisterUsername(state),
  password: getRegisterPassword(state),
  website: getRegisterWebsite(state),
  email: getRegisterEmail(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      name: updateRegName,
      username: updateRegUsername,
      password: updateRegPassword,
      website: updateRegWebsite,
      email: updateRegEmail
    };
    dispatch(factoryMethod[target.name](target.value));
  },
  onSubmit(event, name, username, password, website, email) {
    event.preventDefault();
    dispatch(registerUser({ name, username, password, website, email }));
  }
});

RegisterUser.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterUser);
