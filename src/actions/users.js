import _id from 'short-id';

import { getUsers } from '../services/blogApi';

export const FETCH_USERS = 'FETCH_USERS';
export const LOAD_USERS_START = 'LOAD_USERS_START';
export const LOAD_USERS_END = 'LOAD_USERS_END';

export const fetchUsers = () => ({
  type: FETCH_USERS,
  loadStart: LOAD_USERS_START,
  loadEnd: LOAD_USERS_END,
  payload: getUsers()
});

export const REGISTER_USER = 'REGISTER_USER';
export const registerUser = user => ({
  type: REGISTER_USER,
  payload: {
    id: _id.generate,
    ...user,
  }
});
