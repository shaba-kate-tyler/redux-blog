export const getAllUsers = state => state.users.users;

// eslint-disable-next-line no-unused-vars
export const getCurrentUser = (state, id) => getAllUsers(state).filter(user => {
  if(user.id === id) return user;
});
