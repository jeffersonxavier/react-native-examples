import { USER_LOGOUT, USER_LOGIN_SUCCESS } from '../actions';

export default userReducer = (state = null, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return action.user;
    case USER_LOGOUT:
      return null;
    default:
      return state;
  }
}