import TYPES from './actionTypes';

const defaultState = {
	inputValue: '',
	list: []
};

// reducer 可以接收state但是不能修改
// 必须是纯函数: 固定输入，固定输出，不能有副作用
export default (state = defaultState, action) => {
	let newState = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case TYPES.INIT_LIST:
			newState.inputValue = '';
			newState.list = action.data;
			return newState;

		case TYPES.CHANGE_INPU_VALUE:
			newState.inputValue = action.value;
			return newState;

		case TYPES.ADD_ITEM:
			newState.inputValue = '';
			newState.list = [...newState.list, action.value];
			return newState;

		case TYPES.DELETE_ITEM:
			newState.inputValue = '';
			newState.list.splice(action.index, 1);
			return newState;

		default:
			return state;
	}
};