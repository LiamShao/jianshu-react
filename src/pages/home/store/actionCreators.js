import axios from 'axios';
import TYPES from './constants';

const initHomeAction = ({ topicList, articleList, recommand }) => ({
  type: TYPES.INIT_HOME,
  topicList,
  articleList,
  recommand
});

export const initHome = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      dispatch(initHomeAction(res.data.data));
    });
  }
};