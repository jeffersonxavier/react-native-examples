export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = user => (
  {
    type: USER_LOGIN,
    user,
  }
);

export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = () => ({ type: USER_LOGOUT });
