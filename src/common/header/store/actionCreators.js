import axios from 'axios';
import { fromJS } from 'immutable';

import TYPES from './constants';

const focusOn = () => ({
  type: TYPES.SEARCH_FOCUS,
});

const focusBlur = () => ({
  type: TYPES.SEARCH_BLUR,
});

const mouseEnter = () => ({
  type: TYPES.MOUSE_ENTER,
});

const mouseLeave = () => ({
  type: TYPES.MOUSE_LEAVE,
});

const setTrend = (data) => ({
  type: TYPES.SET_TREND,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

const changePage = (nextPage) => ({
  type: TYPES.CHANGE_PAGE,
  nextPage
});

const getTrend = () => {
  return (dispatch) => {
    axios.get('/api/headerTrend.json').then(res => {
      dispatch(setTrend(res.data.data));
    }).catch(e => {
      console.log(e);
    });
  }
};

export {
  focusOn,
  focusBlur,
  getTrend,
  mouseEnter,
  mouseLeave,
  changePage
}