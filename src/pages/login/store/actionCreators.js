import axios from 'axios';
import TYPES from './constants';

const loginAction = (login) => ({
  type: TYPES.LOGIN,
  login
});

export const login = (account, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
      dispatch(loginAction(res.data.data));
    }).catch(e => {
      console.log(e);
    })
  }
};

const logoutAction = () => ({
  type: TYPES.LOGOUT
});

export const logout = () => {
  return (dispatch) => {
    dispatch(logoutAction());
  }
};