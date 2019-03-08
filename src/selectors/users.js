export const getAllUsers = state => state.users.users;

export const getCurrentUser = (state, id) => getAllUsers(state).filter(user => user.id === Number(id))[0];
