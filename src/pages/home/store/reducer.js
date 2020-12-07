import { fromJS } from 'immutable';
import TYPES from './constants';

const defaultState = fromJS({
  // 主题
  topicList: [],
  // 文章列表
  articleList: [],
  // 推荐列表
  recommand: []
});

// reducer 可以接收state但是不能修改
// 必须是纯函数: 固定输入，固定输出，不能有副作用
export default (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.INIT_HOME:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommand: fromJS(action.recommand),
      });
    case TYPES.LOAD_MORE_ARTICLE:
      return state.set('articleList', fromJS([...state.get('articleList').toJS(), ...action.articleList]));
    default:
      return state;
  }
};