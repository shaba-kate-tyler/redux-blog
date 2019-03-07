import { 
  FETCH_USERS, 
  LOAD_USERS_START,
  LOAD_USERS_END 
} from '../actions/users';

const initialState = {
  users: [],
  isLoading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
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
