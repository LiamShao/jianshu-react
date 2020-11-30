import TYPES from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focus: false,
	trend: []
});

// reducer 可以接收state但是不能修改
// 必须是纯函数: 固定输入，固定输出，不能有副作用
export default (state = defaultState, action) => {
	switch (action.type) {
		case TYPES.SEARCH_FOCUS:
			return state.set('focus', true);
		case TYPES.SEARCH_BLUR:
      return state.set('focus', false);
		case TYPES.SET_TREND:
			return state.set('trend', action.data);
		default:
			return state;
	}
};