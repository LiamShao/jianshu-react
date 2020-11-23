import { takeEvery, put } from 'redux-saga/effects';
import TYPES from './actionTypes';
import { initList } from './actionCreators'

import axios from 'axios';


function* getList() {
  try {
    const res = yield axios.get('http://localhost:4000/anyway');
    const data = res.data;
    yield put(initList(data));
  } catch (e) {
    console.error(e);
  }
}

function* mySaga() {
  yield takeEvery(TYPES.GET_LIST, getList);
}

export default mySaga;