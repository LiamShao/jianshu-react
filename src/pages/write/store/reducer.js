import { fromJS } from 'immutable';

const defaultState = fromJS({
  title: '我是标题',
});

// reducer 可以接收state但是不能修改
// 必须是纯函数: 固定输入，固定输出，不能有副作用
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};