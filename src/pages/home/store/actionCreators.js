import axios from 'axios';
import TYPES from './constants';

const initHomeAction = ({ topicList, articleList, recommand }) => ({
  type: TYPES.INIT_HOME,
  topicList,
  articleList,
  recommand,
});

export const initHome = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      dispatch(initHomeAction(res.data.data));
    });
  }
};

const moreArticleAction = (articleList) => ({
  type: TYPES.LOAD_MORE_ARTICLE,
  articleList,
});

export const getMoreArticle = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then(res => {
      dispatch(moreArticleAction(res.data.data));
    });
  }
}