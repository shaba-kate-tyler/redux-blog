import { 
  FETCH_USERS, 
  LOAD_USERS_START,
  LOAD_USERS_END,
  REGISTER_USER 
} from '../actions/users';

const initialState = {
  users: [],
  isLoading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case REGISTER_USER:
      return {
        ...state,
        users: [...state, { ...payload }]
      };
    case FETCH_USERS:
      return {
        ...state,
        users: payload
      };
    case LOAD_USERS_START:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_USERS_END:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
