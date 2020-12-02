import TYPES from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focus: false,
	mouseIn: false,
	trend: [],
	page: 1,
	totalPage: 1
});

// reducer 可以接收state但是不能修改
// 必须是纯函数: 固定输入，固定输出，不能有副作用
export default (state = defaultState, action) => {
	switch (action.type) {
		case TYPES.SEARCH_FOCUS:
			return state.set('focus', true);
		case TYPES.SEARCH_BLUR:
			return state.set('focus', false);
		case TYPES.MOUSE_ENTER:
			return state.set('mouseIn', true);
		case TYPES.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case TYPES.SET_TREND:
			return state.merge({
				trend: action.data,
				totalPage: action.totalPage
			});
		case TYPES.CHANGE_PAGE:
			return state.set('page', action.nextPage);
		default:
			return state;
	}
};