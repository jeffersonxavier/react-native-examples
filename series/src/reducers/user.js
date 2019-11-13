import { USER_LOGOUT, USER_LOGIN } from '../actions';

export default userReducer = (state = null, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.user;
    case USER_LOGOUT:
      return null;
    default:
      return state;
  }
}