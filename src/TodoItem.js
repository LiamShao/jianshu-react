import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	render() {
		const { content } = this.props;
		return (
			<div onClick={this.handleClick}>
				{content}
			</div>
		)
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.content === this.props.content ? false : true;
	}

	// 从父组件接受参数
	// 第一次出现在父组件中不会执行，已经存在才会执行
	// componentWillReceiveProps() {
	// }

	// componentWillUnmount() {
	// }

	handleClick() {
		const { delItem, index } = this.props;
		delItem(index);
	}
}

TodoItem.propTypes = {
	content: PropTypes.string.isRequired,
	delItem: PropTypes.func,
	index: PropTypes.number
}

// TodoItem.defaultProps = {
// 	test: 'hello!'
// }

export default TodoItem;