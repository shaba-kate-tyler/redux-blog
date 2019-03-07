import { FETCH_POSTS } from '../actions/posts';
const initialState = {
  posts: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: payload
      };
    default:
      return state;
  }
}
