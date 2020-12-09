import { fromJS } from 'immutable';
import TYPES from './constants';

const defaultState = fromJS({
  login: false,
  account: '',
  password: ''
});

// reducer 可以接收state但是不能修改
// 必须是纯函数: 固定输入，固定输出，不能有副作用
export default (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return state.set('login', action.login);
    case TYPES.LOGOUT:
      return state.set('login', false);
    default:
      return state;
  }
};