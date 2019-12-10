import firebase from '../services/api';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const userLoginSuccess = user => (
  {
    type: USER_LOGIN_SUCCESS,
    user,
  }
);

export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = () => ({ type: USER_LOGOUT });

export const userLogin = (email, password) => dispatch => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log('user.....', user);
      dispatch(userLoginSuccess(user));
    })
    // .catch(error => {
    //   console.log(error);
    //   switch (error.code) {
    //     case 'auth/invalid-email':
    //       setMessage('E-mail mal formatado!');
    //       break;
    //     case 'auth/user-not-found':
    //       setMessage('Usuário não encontrado!');
    //       break;
    //     case 'auth/wrong-password':
    //       setMessage('Senha incorreta!');
    //       break;
    //     default:
    //       setMessage('Erro desconhecido!');
    //       break;
    //   }
    // })
    // .then(() => setIsLoading(false));
};
