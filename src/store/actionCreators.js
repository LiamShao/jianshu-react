import TYPES from './actionTypes';


const inputChange = (value) => ({
  type: TYPES.CHANGE_INPU_VALUE,
  value
});

const addItem = (value) => ({
  type: TYPES.ADD_ITEM,
  value
});

const deleteItem = (index) => ({
  type: TYPES.DELETE_ITEM,
  index
});

const initList = (data) => ({
  type: TYPES.INIT_LIST,
  data
});

const getList = () => ({
  type: TYPES.GET_LIST,
});

export {
  getList,
  initList,
  inputChange,
  addItem,
  deleteItem,
}