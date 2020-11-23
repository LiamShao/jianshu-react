import React, { Component } from 'react';

import store from './store/index';
import { getList, inputChange, addItem, deleteItem } from './store/actionCreators';

import TodoListUI from './TodoListUI';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleItemDel = this.handleItemDel.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	render() {
		return (
			<TodoListUI
				list={this.state.list}
				inputValue={this.state.inputValue}
				handleInputChange={this.handleInputChange}
				handleBtnClick={this.handleBtnClick}
				handleItemDel={this.handleItemDel}
			/>
		);
	}

	// 组件已经被挂载到页面
	// 初始化数据请求最好放在这个钩子中
	componentDidMount() {
		this.handleStoreChange = this.handleStoreChange.bind(this);
		store.subscribe(this.handleStoreChange);

		store.dispatch(getList());
	}

	handleStoreChange = () => {
		this.setState(store.getState());
	}

	handleInputChange = (e) => {
		store.dispatch(inputChange(e.target.value));
	}

	handleBtnClick = () => {
		store.dispatch(addItem(this.state.inputValue));
	}

	handleItemDel(index) {
		store.dispatch(deleteItem(index));
	}
}

export default TodoList;
